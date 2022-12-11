/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

// module.exports = nextConfig
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				// source 주소를 입력하면 destination의 주소로 이동 but, 주소 url은 바뀌지 않음
				source: '/api/coins',
				destination: `https://min-api.cryptocompare.com/data/all/coinlist?f459026d79b9444ed29576f403c8ed3c734a41d3b4ef1850f99c8c9f40a4bc72`,
			},
		];
	},
};

module.exports = nextConfig;
