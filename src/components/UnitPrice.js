import axios from "axios"
import Chart from "react-apexcharts";
import React, { Component } from "react";

// remember to export the component, or it cannot be called.
export default class UnitPrice extends Component {
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
                    },
                    stacked: true
                },
                xaxis: {
                    categories: [],
                },
            },
            series: [
                {
                    name: "均价平均值",
                    data: [],
                },
                {
                    name: "均价最大值",
                    data: [],
                },
                {
                    name: "均价最小值",
                    data: [],
                },
            ],
        }
    }
    async componentDidMount() {
        const normal_cat = [];
        const unit_price_mean = [];
        const unit_price_max = [];
        const unit_price_min = [];
        const unit_price_std = [];
        await axios.get("https://backendapicall.click:8000/api/house")
            .then(Response => {
                console.log(Response.data);
                // console.log("Response", Response.data.data.house_detail);
                for (const obj of Response.data) {
                    console.log("obj", obj);
                    // species is always the district
                    if (obj.house_detail.cond === "normal") {
                        normal_cat.push(obj.house_detail.district);
                        unit_price_mean.push(obj.house_detail.unit_price_mean);
                        unit_price_max.push(obj.house_detail.unit_price_max);
                        unit_price_min.push(obj.house_detail.unit_price_min);
                        unit_price_std.push(obj.house_detail.unit_price_std);

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
                            min: 5000,
                            floating: false,
                            decimalsInFloat: undefined,
                        }
                    },
                    series: [
                        {
                            name: "均价平均值",
                            data: unit_price_mean,
                        },
                        {
                            name: "均价最大值",
                            data: unit_price_max,
                        },
                        {
                            name: "均价最小值",
                            data: unit_price_min,
                        },
                        {
                            name: "均价标准差",
                            data: unit_price_std,
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
                    <h2>房屋均价</h2>
                    <p> 此图记录了目前挂载的上海各区二手房的均价信息 （2022年8月6日更新）
                    </p>
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={800} align="center" />
                </article>
            </>
        )
    }

}
