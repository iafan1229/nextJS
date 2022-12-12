import { fetchPrice } from '../components/api';
import React, { useEffect, useState, useRef, use } from 'react';
import { useQuery } from 'react-query';

export default function Price({ name }) {
	const [Data, setData] = useState(null);
	function Unix_timestamp(t) {
		var date = new Date(t * 1000);
		var year = date.getFullYear();
		var month = '0' + (date.getMonth() + 1);
		var day = '0' + date.getDate();
		return month.substr(-2) + '-' + day.substr(-2);
	}

	const { isLoading: priceLoad, data: priceData } = useQuery(
		['price', name],
		() => fetchPrice(name)
	);

	//priceData.RAW[name].USD.PRICE
	useEffect(() => {
		if (!priceLoad) {
			const {
				RAW: { [name]: USD },
			} = priceData;

			setData(USD.USD);
		}
	}, [priceLoad]);
	return (
		<div className='priceBox'>
			{!priceLoad && Data ? (
				<ul className='data-card'>
					<li>
						<h4>현재 코인가격</h4>
						<span>${Data.PRICE}</span>
					</li>
					<li>
						<h4>하루 전보다</h4>
						<span>{Data.CHANGE24HOUR.toFixed(3)}</span> 변동
					</li>
					<li>
						<h4>한시간 전보다</h4>
						<span>{Data.CHANGEHOUR.toFixed(3)}</span> 변동
					</li>
					<li>
						<h4>
							하루중 최고가였던 총량은&nbsp;
							<span>{Data.TOPTIERVOLUME24HOUR} </span>입니다.
						</h4>
						<p></p>
					</li>
				</ul>
			) : (
				<p>Loading Data...</p>
			)}
		</div>
	);
}
