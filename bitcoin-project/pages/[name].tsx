import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef, use } from 'react';
// import '../styles/style.scss';

export default function Home(props: any) {
	const [coinInfo, setCoinInfo] = useState<any>([]);
	const [coinInfo2, setCoinInfo2] = useState<any>({});
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
			console.log(result);

			setCoinInfo2(result);
		})();
	}, []);

	useEffect(() => {
		console.log(coinInfo2);
	});
	return (
		<>
			<ul className='coinInfo'>
				<li>{name}</li>
				<li>{coinInfo2?.description}</li>
				<li>{coinInfo2?.links ? coinInfo2.links.website[0] : 'No Site'}</li>
			</ul>
			<ul className='coinTickers'>
				<li>rank : {coinInfo?.rank}</li>
				<li>symbol : {coinInfo?.symbol}</li>
				<li>total_supply : {coinInfo?.total_supply}</li>
				<li>max_supply : {coinInfo?.max_supply}</li>
			</ul>

			<button onClick={() => route.push('/')}>Go Back</button>
		</>
	);
}

// export async function getStaticProps() {
// 	let result = await getCoins();
// 	return {
// 		props: {
// 			data: result.splice(0, 10),
// 		},
// 	};
// }
