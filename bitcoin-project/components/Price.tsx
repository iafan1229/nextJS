import { fetchPrice } from './react-query/api';
import React, { useEffect, useState, useRef, use } from 'react';
import { useQuery } from 'react-query';

interface Name{
	name: string
}

interface Obj {
	USD: {
		USD: string | null
	}
}
export default function Price({ name }:Name) {
	const [Data, setData] = useState<Obj>(null);

	const { isLoading: priceLoad, data: priceData } = useQuery(
		['price', name],
		() => fetchPrice(name)
	);

	//priceData.RAW[name].USD.PRICE
	useEffect(() => {
		if (!priceLoad) {
			const {
				RAW: { [name]:USD }
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
