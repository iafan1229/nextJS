import React, { ReactNode } from 'react';
import styles from '../styles/Home.module.css';
import Nav from './nav'

interface Props {
	children: ReactNode;
}
export default function Layout({ children }: Props) {
	return (
		<>
			<Nav />
			{children}
		</>
	);
}
