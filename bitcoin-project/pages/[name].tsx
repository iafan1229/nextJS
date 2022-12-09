import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef, use } from 'react';
// import '../styles/style.scss';

export default function Home(props: any) {
	console.log(props);
	const [coinInfo, setCoinInfo] = useState<any>(null);
	const [coinInfo2, setCoinInfo2] = useState<any>(null);
	const route = useRouter();
	const {
		query: { id, name },
	} = route;

	useEffect(() => {
		(async function () {
			let res = await fetch(`https://api.coinpaprika.com/v1/tickers/${id}`);
			let result = await res.json();

			setCoinInfo(result);
		})();
		(async function () {
			let res = await fetch(`https://api.coinpaprika.com/v1/coins/${id}`);
			let result = await res.json();

			setCoinInfo2(result);
		})();
	}, []);

	useEffect(() => {
		console.log(coinInfo2);
	}, [coinInfo2]);
	return (
		<>
			{!coinInfo?.error && !coinInfo2?.error ? (
				<ul className='coinInfo'>
					<li>
						<h2>{name}</h2>
					</li>
					<li>
						<ul className='coinTickers'>
							<li>
								<span>Rank</span>
								<span>{coinInfo?.rank}</span>
							</li>
							<li>
								<span>Symbol</span> <span>{coinInfo?.symbol}</span>
							</li>
							<li>
								<span>Total Supply</span> <span>{coinInfo?.total_supply}</span>
							</li>
							<li>
								<span>Max Supply</span>
								<span>{coinInfo?.max_supply}</span>
							</li>
						</ul>
					</li>
					<li>{coinInfo2?.description}</li>
					<li className='coinLink'>
						{coinInfo2?.links ? (
							<Link href={`${coinInfo2.links.website[0]}`}>
								{coinInfo2.links.website[0]}
							</Link>
						) : (
							'No Site'
						)}
					</li>
				</ul>
			) : (
				<p className='msg'>Loading...</p>
			)}

			<button onClick={() => route.push('/')}>Go Back</button>
		</>
	);
}

// async function getTickers() {
// 	let res = await fetch(`https://api.coinpaprika.com/v1/tickers/${id}`);
// 	let result = await res.json();
// 	return result;
// }
// async function getCoins() {
// 	let res = await fetch(`https://api.coinpaprika.com/v1/coins/${id}`);
// 	let result = await res.json();
// 	return result;
// }
// // export const getStaticPaths = async () => {
// // 	return {
// // 		paths: [{ params: { id: 1 } }],
// // 		fallback: true,
// // 	};
// // };

// export async function getStaticProps() {
// 	let result1 = await getTickers();
// 	let result2 = await getCoins();
// 	return {
// 		props: {
// 			data: [result1, result2],
// 		},
// 	};
// }
