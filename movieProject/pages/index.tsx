import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

interface Movie {
	backdrop_path: string;
	original_title: string;
}
interface backendData {
	posts: {
		results: Result[];
	};
}
interface Result {
	backdrop_path: string;
	original_title: string;
}
export default function Index(props: backendData) {
	console.log(props.posts.results);
	const [result] = props.posts.results;
	return (
		<>
			<h1 className='text-rose-500'>Trending List</h1>
			<ul className='flex flex-wrap	justify-center	'>
				{props.posts.results?.map((el, idx) => {
					return (
						<li className='basis-6/12' key={idx}>
							<Link href='/detail'>
								<img
									src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}></img>
								<li>{el.original_title}</li>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
export async function getData() {
	await fetch(`http://localhost:3000/again`)
		.then((res) => {
			return res.json();
		})
		.then((post) => {
			console.log(post);
			return post;
			// getMovies(post.results);
		});
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/again');
	const posts = await res.json();
	return {
		props: {
			posts,
			// data: await getData(),
		},
		// revalidate: 10,
	};
}
