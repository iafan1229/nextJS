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
		query: { name, des, rank, site, symbol, max, total },
	} = route;

	console.log(site);
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
								<span>{rank}</span>
							</li>
							<li>
								<span>Symbol</span> <span>{symbol}</span>
							</li>
							<li>
								<span>Total Supply</span> <span>{total}</span>
							</li>
							<li>
								<span>Max Supply</span>
								<span>{parseFloat(max)}</span>
							</li>
						</ul>
					</li>
					<li>{des?.substring(0, 600) + '...'}</li>
					<li className='coinLink'>
						<Link href={`${site}`}>{'See more Info : ' + site}</Link>
					</li>
				</ul>
			) : (
				<p className='msg'>Loading...</p>
			)}

			<button onClick={() => route.push('/')}>Go Back</button>
		</>
	);
}

async function getTickers() {
	let res = await fetch(`https://api.coinpaprika.com/v1/tickers/${id}`);
	let result = await res.json();
	return result;
}
async function getCoins() {
	let res = await fetch(`https://api.coinpaprika.com/v1/coins/${id}`);
	let result = await res.json();
	return result;
}
// export const getStaticPaths = async () => {
// 	return {
// 		paths: [{ params: { id: 1 } }],
// 		fallback: true,
// 	};
// };

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       '/blog/first-post',
//       // Object variant:
//       { params: { slug: 'second-post' } },
//     ],
//     fallback: true,
//   }
// }

// export async function getStaticProps(context) {
// 	console.log(context);
// 	let result1 = await getTickers();
// 	let result2 = await getCoins();
// 	return {
// 		props: {
// 			data: [result1, result2],
// 		},
// 	};
// }
