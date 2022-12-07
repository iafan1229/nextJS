import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';


export default function detail() {
	const router = useRouter();
	return (
		<div>
			<h1>영화 제목</h1>
			<div>영화이미지</div>
		</div>
	);
}
