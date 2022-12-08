import Link from 'next/link';
import React, { useEffect, useState, useRef, use } from 'react';
// import '../styles/style.scss';

export default function Home(props: any) {
	const { data } = props;
	return (
		<>
			<ul className='coins'>
				{data?.map((el, idx) => {
					console.log(el);
					return (
						<li key={idx}>
							<Link
								href={{
									pathname: `/[name]`,
									query: { name: el.name, id: el.id },
								}}
								as={el.name}>
								<span>
									<img
										src={`https://coinicons-api.vercel.app/api/icon/${el.symbol.toLowerCase()}`}
									/>
								</span>
								{el.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

async function getCoins() {
	let res = await fetch('https://api.coinpaprika.com/v1/coins');
	return await res.json();
}

export async function getStaticProps() {
	let result = await getCoins();
	return {
		props: {
			data: result.splice(0, 10),
		},
	};
}
