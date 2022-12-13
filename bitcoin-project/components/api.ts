const KEY = process.env.API_KEY;

export async function fetchCoins() {
	let res = await fetch('http://localhost:3000/api/coins');
	let result = await res.json();

	return result;
}

export async function fetchCoinInfo(name) {
	let res = await fetch(`http://localhost:3000/api/coins?fsym=${name}`);
	let result = await res.json();
	return result;
}

export async function fetchChart(name) {
	let res = await fetch(
		`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=13&api_key=${KEY}`
	);
	let result = await res.json();
	return result;
}

export async function fetchPrice(name) {
	let res = await fetch(
		`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${name}&tsyms=USD,EUR&api_key=${KEY}`
	);
	let result = await res.json();
	return result;
}
