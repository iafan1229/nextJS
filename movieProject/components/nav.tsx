import Link from 'next/link';

export default function nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>Movies</Link>
				</li>
				<li>
					<Link href='/detail'>ABOUT</Link>
				</li>
			</ul>
		</nav>
	);
}
