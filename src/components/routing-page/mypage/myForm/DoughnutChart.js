import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import styled from 'styled-components';

const ChartTemplate = styled.div`
  box-sizing: border-box;
  width: 10vw;
  margin: 1vw;
`;

const DoughnutChart = ({voteRate}) => {
    const vote = voteRate;
    const notVote = 100 - voteRate

    const option = {
        legend: {
            display: false,
            position: "right"
        },

    };

    const data = {
        labels: ["미참여", "참여"],
        datasets: [
            {
                labels: ["미참여", "참여"],
                data: [notVote, vote],
                borderWidth: 1,
                hoverBorderWidth: 5,
                backgroundColor: [
                    "#F2F1F1",
                    "rgba(255, 182, 99, 0.6)",
                ],
                fill: true
            }
        ]
    };

    const plugins = [{
        beforeDraw: function (chart) {
            let width = chart.width;
            let height = chart.height;
            let ctx = chart.ctx;
            ctx.restore();
            ctx.font = "1.2vw LotteMartDream";
            ctx.textBaseline = "top";
            ctx.fontColor = "#707070";
            let text = `${voteRate}%`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        },
    }]

    return (
        <ChartTemplate>
            <Doughnut type={'doughnut'} data={data} options={option} plugins={plugins}/>
        </ChartTemplate>
    );
};

export default DoughnutChart;
