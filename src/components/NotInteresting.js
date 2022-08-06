import axios from "axios"
import Chart from "react-apexcharts";
import React, { Component } from "react";

// remember to export the component, or it cannot be called.
export default class NotInteresting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226", "#ff5400", "#ff6d00", "#ff8500", "#ff9100", "#ff9e00", "#00b4d8", "#0096c7", "#0077b6", "#023e8a"],
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
                    dataLabels: {
                        enabled: true,
                        background: {
                            enabled: true,
                            borderRadius: 2,
                        }
                    }
                },
                xaxis: {
                    categories: [],
                },
            },
            series: [
                {
                    name: "发布时间平均值",
                    data: [],
                },
                {
                    name: "发布时间最大值",
                    data: [],
                },
                {
                    name: "发布时间最小值",
                    data: [],
                },

            ],
        }
    }
    async componentDidMount() {
        const normal_cat = [];
        const pudong = [];
        const minhang = [];
        const baoshan = [];
        const xuhui = [];
        const putuo = [];
        const yangpu = [];
        const changning = [];
        const songjiang = [];
        const jiading = [];
        const huangpu = [];
        const jingan = [];
        const hongkou = [];
        const qingpu = [];
        const fengxian = [];
        const jinshan = [];
        const chongming = [];
        await axios.get("https://backendapicall.click:8000/api/house")
            .then(Response => {
                console.log(Response.data);
                // console.log("Response", Response.data.data.house_detail);
                for (const obj of Response.data) {
                    console.log("obj", obj);
                    // species is always the district
                    if (obj.house_detail.cond === "not_interesting") {
                        if (obj.house_detail.district === "pudong") {
                            pudong.push(obj.house_detail.house_area_mean);
                            pudong.push(obj.house_detail.total_price_mean);
                            pudong.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "minhang") {
                            minhang.push(obj.house_detail.house_area_mean);
                            minhang.push(obj.house_detail.total_price_mean);
                            minhang.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "baoshan") {
                            baoshan.push(obj.house_detail.house_area_mean);
                            baoshan.push(obj.house_detail.total_price_mean);
                            baoshan.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "xuhui") {
                            xuhui.push(obj.house_detail.house_area_mean);
                            xuhui.push(obj.house_detail.total_price_mean);
                            xuhui.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "putuo") {
                            putuo.push(obj.house_detail.house_area_mean);
                            putuo.push(obj.house_detail.total_price_mean);
                            putuo.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "yangpu") {
                            yangpu.push(obj.house_detail.house_area_mean);
                            yangpu.push(obj.house_detail.total_price_mean);
                            yangpu.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "changning") {
                            changning.push(obj.house_detail.house_area_mean);
                            changning.push(obj.house_detail.total_price_mean);
                            changning.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "songjiang") {
                            songjiang.push(obj.house_detail.house_area_mean);
                            songjiang.push(obj.house_detail.total_price_mean);
                            songjiang.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "jiading") {
                            jiading.push(obj.house_detail.house_area_mean);
                            jiading.push(obj.house_detail.total_price_mean);
                            jiading.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "huangpu") {
                            huangpu.push(obj.house_detail.house_area_mean);
                            huangpu.push(obj.house_detail.total_price_mean);
                            huangpu.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "jingan") {
                            jingan.push(obj.house_detail.house_area_mean);
                            jingan.push(obj.house_detail.total_price_mean);
                            jingan.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "hongkou") {
                            hongkou.push(obj.house_detail.house_area_mean);
                            hongkou.push(obj.house_detail.total_price_mean);
                            hongkou.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "qingpu") {
                            qingpu.push(obj.house_detail.house_area_mean);
                            qingpu.push(obj.house_detail.total_price_mean);
                            qingpu.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "fengxian") {
                            fengxian.push(obj.house_detail.house_area_mean);
                            fengxian.push(obj.house_detail.total_price_mean);
                            fengxian.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "jinshan") {
                            jinshan.push(obj.house_detail.house_area_mean);
                            jinshan.push(obj.house_detail.total_price_mean);
                            jinshan.push(obj.house_detail.year_struct_mean);
                        } else if (obj.house_detail.district === "chongming") {
                            chongming.push(obj.house_detail.house_area_mean);
                            chongming.push(obj.house_detail.total_price_mean);
                            chongming.push(obj.house_detail.year_struct_mean);
                        }

                    } else {
                        // year_struct_mean.push(0);
                        // year_struct_max.push(0);
                        // year_struct_min.push(0);
                    }
                }
                this.setState({
                    options: {
                        xaxis: {
                            categories: ['平均面积', '平均总价', '平均年代'],
                            // categories: ['house_area_mean', 'total_price_mean', 'year_struct_mean'],
                        },
                    },
                    series: [

                        {
                            name: "浦东",
                            data: pudong,
                        },
                        {
                            name: "闵行",
                            data: minhang,
                        },
                        {
                            name: "宝山",
                            data: baoshan,
                        },
                        {
                            name: "徐汇",
                            data: xuhui,
                        },
                        {
                            name: "普陀",
                            data: putuo,
                        },
                        {
                            name: "杨浦",
                            data: yangpu,
                        },
                        {
                            name: "长宁",
                            data: changning,
                        },
                        {
                            name: "松江",
                            data: songjiang,
                        },
                        {
                            name: "嘉定",
                            data: jiading,
                        },
                        {
                            name: "黄浦",
                            data: huangpu,
                        },
                        {
                            name: "静安",
                            data: jingan,
                        },
                        {
                            name: "虹口",
                            data: hongkou,
                        },
                        {
                            name: "青浦",
                            data: qingpu,
                        },
                        {
                            name: "奉贤",
                            data: fengxian,
                        },
                        {
                            name: "金山",
                            data: jinshan,
                        },
                        {
                            name: "崇明",
                            data: chongming,
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
                    <h2>👿 关注热度低截面图</h2>
                    <p> 此图记录了发布天数大于平均天数但是关注人数小于平均人数的房屋特征值 （2022年8月6日更新）
                    </p>
                    <Chart options={this.state.options} series={this.state.series} type="radar" width={1000} align="center" />
                </article>
            </>
        )
    }

}
