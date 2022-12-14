import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef, use, ButtonHTMLAttributes } from 'react';
import { useQuery } from 'react-query';
import { fetchCoinInfo } from '../components/react-query/api';
import ChartJsx from '../components/ChartJsx';
import Price from '../components/Price';
import Global from '../components/style/Global';
import styled from 'styled-components';


export default function Home() {
	const [tab, setTab] = useState(true);
	const route = useRouter();
	//const {query: { name }}= route;
	const {query} = route;
	
	const name = query.name as string;

	const { isLoading: InfoLoad, data: InfoData } = useQuery(['coin', name], () =>
		fetchCoinInfo(name)
	);

	const handleTab = (e:React.MouseEvent) => {
		const alias = e.target as HTMLElement;
		if (alias.textContent === 'Chart') {
			setTab(true);
		} else {
			setTab(false);
		}
	};
	const CoinInfo = styled.ul.attrs({className:'coinInfo'})`
		li {
			span{
				&:first-child {
					color: ${props=> props.theme.pointColor}
				}
			}
		}
	`
	const TabBtn = styled.ul.attrs({className: 'tab'})`
		li {
			&.on {
				// background: #{props=>}
			}
			button {
				background: ${props=>props.theme.btnColor}
			}
		}
	`

	return (
		<>
			<Head>
				<title>Ha Young Bitcoin - ${name}</title>
			</Head>
			<Global/>
			{InfoLoad ? (
				<p className='msg'>Loading...</p>
			) : (
				<CoinInfo>
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
					<li>{InfoData?.Data[name].Description?.substring(0, 400) + '...'}</li>
					<li className='coinLink'>
						{InfoData?.Data[name].AssetWebsiteUrl ? (
							<Link href={`${InfoData?.Data[name].AssetWebsiteUrl}`}>
								{'See more Info : ' + InfoData?.Data[name].AssetWebsiteUrl}
							</Link>
						) : null}
					</li>
				</CoinInfo>
			)}
				<TabBtn>
					<li>
						<button className={tab ? 'on' : ''} onClick={(el) => handleTab(el)}>
							{'Chart'}
						</button>
					</li>
					<li>
						<button className={!tab ? 'on' : ''} onClick={(el) => handleTab(el)}>
							{'Price'}
						</button>
					</li>
				</TabBtn>
				<div className='tab-content'>
					{tab ? <ChartJsx name={name} /> : <Price name={name} />}
				</div>

				<button style={{ margin: '20px 0' }} onClick={() => route.push('/')}>
					Go Back
				</button>
			
		</>
	);
}