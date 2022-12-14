const KEY = process.env.API_KEY;

export async function fetchCoins() {
	let res = await fetch('http://localhost:3000/api/coins');
	let result = await res.json();

	return result;
}

export async function fetchCoinInfo(name:string) {
	let res = await fetch(`http://localhost:3000/api/coins?fsym=${name}`);
	let result = await res.json();
	return result;
}

export async function fetchChart(name:string) {
	let res = await fetch(
		`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=13&api_key=${KEY}`
	);
	let result = await res.json();
	return result;
}

export async function fetchPrice(name:string) {
	let res = await fetch(
		`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${name}&tsyms=USD,EUR&api_key=${KEY}`
	);
	let result = await res.json();
	return result;
}

/*
https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=10&aggregate=3&e=CCCAGG
https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistoday

https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10

https://ohlcv-api.nomadcoders.workers.dev/?coinId=btc-bitcoin

*/
