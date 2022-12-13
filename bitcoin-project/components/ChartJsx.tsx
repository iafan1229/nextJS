import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { fetchChart, fetchPrice } from './react-query/api';
import React, { useEffect, useState, useRef, use } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

Chart.register(...registerables);

export default function ChartJsx({ name }) {
	
	const [labels, setLabels] = useState(null);
	const [close, setClose] = useState(null);
	const [high, setHigh] = useState(null);
	const { isLoading: chartLoad, data: chartData } = useQuery(
		['chart', name],
		() => fetchChart(name)
	);

	function Unix_timestamp(t) {
		var date = new Date(t * 1000);
		var year = date.getFullYear();
		var month = '0' + (date.getMonth() + 1);
		var day = '0' + date.getDate();
		return month.substr(-2) + '-' + day.substr(-2);
	}

	useEffect(() => {
		setLabels(
			chartData?.Data.Data?.map((el, idx) => {
				return Unix_timestamp(el.time);
			})
		);
		setClose(
			chartData?.Data.Data?.map((el, idx) => {
				return el.close;
			})
		);
		setHigh(
			chartData?.Data.Data?.map((el, idx) => {
				return el.high;
			})
		);
	}, [chartData, name]);

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'daily close price',
				data: close,
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
			{
				label: 'daily highst price',
				data: high,
				fill: false,
				borderColor: '#742774',
			},
		],
	};

	const Des = styled.p.attrs({className:'des'})`
		color: ${props=>props.theme.pointColor} !important;
		span {
			color: ${props=>props.theme.textColor} !important;
		}
	`
	return (
		<div className='chart-wrap'>
			{labels && close && high ? (
				<>
					<Des>
						2주간의 코인 종가<br></br>
						<span>(Label 클릭시 해당데이터는 blocking 처리됩니다)</span>
					</Des>
					<Line data={data} />
				</>
			) : (
				<p>Chart Loading...</p>
			)}
		</div>
	);
}
