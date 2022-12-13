import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { darkTheme, lightTheme } from '../components/theme';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	// const [color, setColor] = useRecoilState(themeState)
	// const a = useRecoilValue(themeState)
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				
					<Layout>
						<Header />
						<Component {...pageProps} />
						<Footer />
					</Layout>
					
			</RecoilRoot>
		</QueryClientProvider>
	);
}
