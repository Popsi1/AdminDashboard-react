import React, { Component } from 'react'
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./home.css";

export default class home extends Component {
    render() {
        return (
            <div className="home">
                <FeaturedInfo />
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                <div className="homeWidgets">
                    <WidgetSm/>
                    <WidgetLg/>
                </div>
            </div>
        )
    }
}
