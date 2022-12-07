/** @type {import('next').NextConfig} */
const API = '629bb7e0a6dd12372d435cad53789c94';

module.exports = {
	async rewrites() {
		return [
			{
				source: '/again',
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=629bb7e0a6dd12372d435cad53789c94&language=ko-KR&page=1s`,
			},
		];
	},
};
