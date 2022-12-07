import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';


export default function detail() {
	const route = useRouter()
	const {keyword, id} = route.query
	console.log(route.query)
	return (
		<div>
			<h1>영화 제목: {id}</h1>
			<div><img src={`https://image.tmdb.org/t/p/w500/${keyword}`}></img></div>
		</div>
	);
}
