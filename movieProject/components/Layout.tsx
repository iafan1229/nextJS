import React, { ReactNode } from 'react';
import styles from '../styles/Home.module.css';
import Nav from './nav';
import Head from 'next/head';

interface Props {
	children: ReactNode;
}
export default function Home({ children }: Props) {
	return (
		<>
			<Head>
				<title>dd</title>
			</Head>
			<Nav />
			{children}
		</>
	);
}
