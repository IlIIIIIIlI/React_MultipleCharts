import axios from "axios"
import Chart from "react-apexcharts";
import React, { Component } from "react";

// remember to export the component, or it cannot be called.
export default class Records extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ["#0d47a1"],
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
                yaxis: {
                    min: 0,
                    floating: false,
                    decimalsInFloat: undefined,
                }
            },
            series: [
                {
                    name: "目前站上数据量",
                    data: [],
                },
            ],
        }
    }
    async componentDidMount() {
        const normal_cat = [];
        const records = []
        await axios.get("https://backendapicall.click:8000/api/house")
            .then(Response => {
                console.log(Response.data);
                // console.log("Response", Response.data.data.house_detail);
                for (const obj of Response.data) {
                    console.log("obj", obj);
                    // species is always the district
                    if (obj.house_detail.cond === "normal") {
                        normal_cat.push(obj.house_detail.district);
                        records.push(obj.house_detail.lens);
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
                    },
                    series: [
                        {
                            name: "目前站上数据量",
                            data: records,
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
                    <h1>尊觉投资房产投资仪表盘</h1>
                    <h2>站上数据</h2>
                    <p> 此图记录了站上总计二手房数据 （2022年8月6日更新）
                    </p>
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={800} align="center" />
                </article>
            </>
        )
    }

}
