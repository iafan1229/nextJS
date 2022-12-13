import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../components/theme';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { themeState } from '../components/store';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	
	const getTheme = useRecoilValue(themeState)
	
	return (
		<>
		<ThemeProvider theme={(getTheme) ? darkTheme: lightTheme}>
			<div id='wrap'>{children}</div>
		</ThemeProvider>
			
		</>
	);
}
