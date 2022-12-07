import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";

interface backendData {
	data: {
		results: Result[]
	}
}
interface Result {
	backdrop_path: string;
	original_title: string;
	id?: number;
}

export default function Index(props:backendData) {
	const router = useRouter()
	return (
		<>
			<h1 className='text-rose-500' style={{paddingBottom:"30px 0",fontSize:30}}>Trending List</h1>
			<ul className='flex flex-wrap	justify-center'>
				{props.data.results?.map((el, idx) => {
					const {backdrop_path, original_title, id} = el
					return (
						<li className='basis-6/12' key={idx} onClick={()=>router.push(`/${id}`)}>
							<img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}></img>
							<p>{original_title}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
}
async function getData() {
	return await fetch(`http://localhost:3000/again`).then((res) => res.json()).then((post) => post)
}

export async function getStaticProps() {
	let result = await getData().then(el=>el)
	return {
		props: {
			data: result,
		},
	};
}
