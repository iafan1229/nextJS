import { Router } from 'express';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef, use } from 'react';
import { useQuery } from 'react-query';
import { fetchCoinInfo } from '../components/api';

export default function Home() {
	const route = useRouter();
	const {
		query: { name },
	} = route;
	const { isLoading: InfoLoad, data: InfoData } = useQuery(
		['coin', route.query.name],
		() => fetchCoinInfo(route.query.name)
	);

	console.log(InfoData);

	return (
		<>
			<button onClick={() => route.push('/')}>Go Back</button>
			{InfoLoad ? (
				<p className='msg'>Loading...</p>
			) : (
				<ul className='coinInfo'>
					<li>
						<h2>{InfoData?.Data[name].FullName}</h2>
					</li>
					<li>
						<ul className='coinTickers'>
							<li>
								<span>Rank</span>
								<span>{InfoData?.Data[name].SortOrder}</span>
							</li>
							<li>
								<span>Symbol</span> <span>{InfoData?.Data[name].Symbol}</span>
							</li>
							<li>
								<span>Total Supply</span>{' '}
								<span>{InfoData?.Data[name].CirculatingSupply}</span>
							</li>
							<li>
								<span>Max Supply</span>
								<span>{parseFloat(InfoData?.Data[name].MaxSupply)}</span>
							</li>
						</ul>
					</li>
					<li>{InfoData?.Data[name].Description?.substring(0, 600) + '...'}</li>
					<li className='coinLink'>
						{InfoData?.Data[name].AssetWebsiteUrl ? (
							<Link href={`${InfoData?.Data[name].AssetWebsiteUrl}`}>
								{'See more Info : ' + InfoData?.Data[name].AssetWebsiteUrl}
							</Link>
						) : null}
					</li>
				</ul>
			)}

			<div></div>
			<button onClick={() => route.push(`${name}/chart`)}></button>
		</>
	);
}

/*
https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=10&aggregate=3&e=CCCAGG
https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistoday

https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10

https://ohlcv-api.nomadcoders.workers.dev/?coinId=btc-bitcoin

*/
