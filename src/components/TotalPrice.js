import axios from "axios"
import Chart from "react-apexcharts";
import React, { Component } from "react";

// remember to export the component, or it cannot be called.
export default class TotalPrice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ["#06bee1", "#1768ac", "#2541b2", "#03256c"],
                chart: {
                    id: "basic-bar",
                    title: {
                        text: "Basic Bar",
                        align: 'center',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                            fontFamily: undefined,
                            color: '#263238'
                        },
                    }
                },
                xaxis: {
                    categories: [],
                },
            },
            series: [
                {
                    name: "总价平均值",
                    data: [],
                },
                {
                    name: "总价最大值",
                    data: [],
                },
                {
                    name: "总价最小值",
                    data: [],
                },
            ],
        }
    }
    async componentDidMount() {
        const normal_cat = [];
        const total_price_mean = [];
        const total_price_max = [];
        const total_price_min = [];
        const total_price_std = [];
        await axios.get("https://backendapicall.click:8000/api/house")
            .then(Response => {
                console.log(Response.data);
                // console.log("Response", Response.data.data.house_detail);
                for (const obj of Response.data) {
                    console.log("obj", obj);
                    // species is always the district
                    if (obj.house_detail.cond === "normal") {
                        normal_cat.push(obj.house_detail.district);
                        total_price_mean.push(obj.house_detail.total_price_mean);
                        total_price_max.push(obj.house_detail.total_price_max);
                        total_price_min.push(obj.house_detail.total_price_min);
                        total_price_std.push(obj.house_detail.total_price_std);

                    } else {
                        // year_struct_mean.push(0);
                        // year_struct_max.push(0);
                        // year_struct_min.push(0);
                    }
                }
                this.setState({
                    options: {
                        xaxis: {
                            categories: normal_cat,
                        },
                        yaxis: {
                            min: 0,
                            floating: false,
                            decimalsInFloat: undefined,
                        }
                    },
                    series: [
                        {
                            name: "总价平均值",
                            data: total_price_mean,
                        },
                        {
                            name: "总价最大值",
                            data: total_price_max,
                        },
                        {
                            name: "总价最小值",
                            data: total_price_min,
                        },
                        {
                            name: "总价标准差",
                            data: total_price_std,
                        },
                    ],

                    // catch the errors
                }).catch(err => {
                    console.log("errr", err);
                })
            })
    }

    render() {
        return (
            <>
                <article>
                    <h2>房屋总价</h2>
                    <p> 此图记录了目前挂载的上海各区二手房的总价信息 （2022年8月6日更新）
                    </p>
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={800} align="center" />
                </article>
            </>
        )
    }

}
