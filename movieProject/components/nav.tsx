import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>영화리스트</Link>
				</li>
				<li>
					<Link href='/about'>소개</Link>
				</li>
			</ul>
		</nav>
	);
}
