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
		`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=14`
	);
	let result = await res.json();
	return result;
}
