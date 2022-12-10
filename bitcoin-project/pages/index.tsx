import Link from 'next/link';
import React, { useEffect, useState, useRef, use } from 'react';
// import '../styles/style.scss';

export default function Home(props: any) {
	const { data } = props;
	console.log(data);

	const [coins, setCoins] = useState(null);
	const [rank, setRank] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const a = data.sort((a, b) => a.SortOrder - Number(b.SortOrder));
		setRank(a);
		setLoading(false);
	}, [data]);

	return (
		<>
			{loading ? (
				<div className='loading'>
					<p>코인 데이터를 패칭하여 순위를 매기는 중입니다</p>
					<p>잠시만 기다려주세요</p>
				</div>
			) : (
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
										}}
										as={`/${el.FullName}`}>
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
			)}
		</>
	);
}

async function fetchCoins() {
	let res = await fetch('http://localhost:3000/api/coins');
	let result = await res.json();

	let arr = [];
	for (let key in result.Data) {
		if (result.Data[key].SortOrder < 20) arr.push(result.Data[key]);
		// if (key === 'BTC') console.log(result.Data[key].SortOrder);
	}
	return arr;
}

export async function getStaticProps() {
	let result = await fetchCoins();
	return {
		props: {
			data: result,
		},
	};
}
