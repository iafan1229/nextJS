import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCoins } from '../components/react-query/api';
import Global from '../components/style/Global';

interface IData {
	FullName: string,
	Name: string,
	[name:string]: string,
	SortOrder: string
}

export default function Home() {
	
	const { isLoading, data } = useQuery('allCoins', fetchCoins);
	const [rank, setRank] = useState<IData[]|null>(null);


	useEffect(() => {
		if (data) {
			let arr = [];
			for (let key in data.Data) {
				if (data.Data[key].SortOrder <= 20) {
					arr.push(data.Data[key]);
				}
			}
			setRank(arr);
			arr.sort((a, b) => a.SortOrder - Number(b.SortOrder));
		}
	}, [data]);


	return (
		<>
			<Head>
				<title>Ha young BitCoin - Top tier 20 coins!</title>
			</Head>
			<Global/>
			<p style={{ margin: '10px 0' }}>
				거래소의 탑티어 코인을 매칭하여 자동 순위매기는 시스템
			</p>
			{isLoading ? (
				<div className='loading'>
					<p>코인 데이터를 패칭하여 순위를 매기는 중입니다</p>
					<p>잠시만 기다려주세요</p>
				</div>
			) : (
				<ul className='coins'>
					{rank?.map((el, idx) => {
						return (
							<li key={idx}>
								<Link
									href={{
										pathname: `/[name]`,
										query: { name: el.Name },
									}}>
									<span>
										<img
											src={`https://coinicons-api.vercel.app/api/icon/${el.Name.toLowerCase()}`}
										/>
									</span>
									{idx + 1 + '위 '}
									{el.FullName}
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
}

// export async function getStaticProps() {
// 	// let result = await fetchCoins();
// 	return {
// 		props: {
// 			data: result,
// 		},
// 	};
// }
