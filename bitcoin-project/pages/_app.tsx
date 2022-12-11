import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Footer />
		</QueryClientProvider>
	);
}
