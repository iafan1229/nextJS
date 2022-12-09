import Link from 'next/link';
import React, { useEffect, useState, useRef, use } from 'react';
// import '../styles/style.scss';

export default function Home(props: any) {
	const [coins, setCoins] = useState(null);
	const [rank, setRank] = useState(null);
	// const { data } = props;

	useEffect(() => {
		let result = null;
		(async function () {
			let res = await fetch(
				'https://min-api.cryptocompare.com/data/all/coinlist?f459026d79b9444ed29576f403c8ed3c734a41d3b4ef1850f99c8c9f40a4bc72'
			);
			let result = await res.json();

			let arr = [];
			for (let key in result.Data) {
				if (result.Data[key].SortOrder < 20) arr.push(result.Data[key]);
				// if (key === 'BTC') console.log(result.Data[key].SortOrder);
			}
			setCoins(arr);
		})();
		// console.log(result.data)
	}, []);

	useEffect(() => {
		const a = coins?.sort((a, b) => a.SortOrder - Number(b.SortOrder));
		setRank(a);
	}, [coins]);

	useEffect(() => {
		console.log(rank);
	}, [rank]);
	return (
		<>
			<ul className='coins'>
				{rank?.map((el, idx) => {
					if (rank == null) {
						return <h3>로딩중....</h3>;
					} else {
						return (
							<li key={idx}>
								<Link
									href={{
										pathname: `/[name]`,
										query: {
											name: el.FullName,
											des: el.Description,
											rank: el.SortOrder,
											site: el.AssetWebsiteUrl,
											symbol: el.Symbol,
											max: el.MaxSupply,
											total: el.CirculatingSupply,
										},
									}}>
									<span>
										<img
											src={`https://coinicons-api.vercel.app/api/icon/${el.Name.toLowerCase()}`}
										/>
									</span>
									{idx + 1 + '위 '}
									{el.CoinName}
								</Link>
							</li>
						);
					}
				})}
			</ul>
		</>
	);
}

// async function getCoins() {
// 	let res = await fetch(
// 		'https://min-api.cryptocompare.com/data/all/coinlist?f459026d79b9444ed29576f403c8ed3c734a41d3b4ef1850f99c8c9f40a4bc72'
// 	);
// 	return await res.json();
// }

// export async function getStaticProps() {
// 	let result = await getCoins();
// 	return {
// 		props: {
// 			data: result.data.Data.BTC,
// 		},
// 	};
