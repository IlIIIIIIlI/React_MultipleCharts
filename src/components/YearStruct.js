import axios from "axios"
import Chart from "react-apexcharts";
import React, { Component } from "react";

// remember to export the component, or it cannot be called.
export default class YearStruct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ["#42a5f5", "#1976d2", "#0d47a1"],
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
                    min: 1900,
                    floating: false,
                    decimalsInFloat: undefined,
                }
            },
            series: [
                {
                    name: "建造年份平均值",
                    data: [],
                },
                {
                    name: "建造年份最大值",
                    data: [],
                },
                {
                    name: "建造年份最小值",
                    data: [],
                },
            ],
        }
    }
    async componentDidMount() {
        const normal_cat = [];
        const year_struct_mean = [];
        const year_struct_max = [];
        const year_struct_min = [];
        await axios.get("https://backendapicall.click:8000/api/house")
            .then(Response => {
                console.log(Response.data);
                // console.log("Response", Response.data.data.house_detail);
                for (const obj of Response.data) {
                    console.log("obj", obj);
                    // species is always the district
                    if (obj.house_detail.cond === "normal") {
                        normal_cat.push(obj.house_detail.district);
                        year_struct_mean.push(obj.house_detail.year_struct_mean);
                        year_struct_max.push(obj.house_detail.year_struct_max);
                        year_struct_min.push(obj.house_detail.year_struct_min);
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
                            min: 1900,
                            floating: false,
                            decimalsInFloat: undefined,
                        }
                    },
                    series: [
                        {
                            name: "建造年份平均值",
                            data: year_struct_mean,
                        },
                        {
                            name: "建造年份最大值",
                            data: year_struct_max,
                        },
                        {
                            name: "建造年份最小值",
                            data: year_struct_min,
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
                    <h2>房屋建立年份</h2>
                    <p> 此图记录了目前挂载的上海各区二手房的建造年份信息 （2022年8月6日更新）
                        <script>
                            date = new Date().toLocaleDateString();
                            document.write(date);
                        </script>
                    </p>
                    <Chart options={this.state.options} series={this.state.series} type="bar" width={800} align="center" />
                </article>
            </>
        )
    }

}
