import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactEcharts from 'echarts-for-react'
import { searchDataAsync } from "../../../../redux/boardReducer";
import { getDataAsync } from "../../../../redux/ethReducer";
import useInterval from "../../utils/useInterval";

import { Card, CardHeader, CardContent } from '@mui/material'

export default React.memo(function Bar(props) {
    const dispatch = useDispatch();
    const { dashboard } = useSelector((state) => state.boardReducer);
    const { eth } = useSelector((state) => state.ethReducer);

    const [delay, setDelay] = useState(10000);
    const [channel1, setChannel1] = useState();
    const [channel2, setChannel2] = useState();


    useInterval(() => {
        // Your custom logic here
        props.setLoading(true);
        dispatch(searchDataAsync());
        dispatch(getDataAsync());
        props.setLoading(false);
    }, delay);

    useEffect(() => {
        props.setLoading(true);

        const channel1 = [];
        const channel2 = [];

        const option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: {},
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: {
                type: "value",
                boundaryGap: [0, 0.01],
            },
            yAxis: {
                type: "category",
                data: ["Blocks"],
            },
            series: [
                {
                    name: "Channel 1",
                    type: "bar",
                    data: channel1,
                },
                {
                    name: "Channel 2",
                    type: "bar",
                    data: channel2,
                },
            ],
        };

        for (const data of dashboard) {
            channel1.push(data.total);
        }

        for (const data of eth) {
            channel2.push(data.total);
        }

        setChannel1(channel1);
        setChannel2(channel2);
        setOptions(option);

        props.setLoading(false);
    }, [dashboard]);

    const [options, setOptions] = useState({
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {},
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
        },
        yAxis: {
            type: "category",
            data: ["Blocks"],
        },
        series: [
            {
                name: "Channel 1",
                type: "bar",
                data: channel1,
            },
            {
                name: "Channel 2",
                type: "bar",
                data: channel2,
            },
        ],
    });

    return (
        <Card>
            <CardHeader />
            <CardContent>
                <ReactEcharts option={options} />
            </CardContent>
        </Card>
    );
})