import Head from 'next/head';
import Link from 'next/link';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Head>
				<title>TEST</title>
				<meta name='description' content='test' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div id='wrap'>{children}</div>
		</>
	);
}
