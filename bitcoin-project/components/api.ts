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
		`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=13&api_key=f459026d79b9444ed29576f403c8ed3c734a41d3b4ef1850f99c8c9f40a4bc72`
	);
	let result = await res.json();
	return result;
}

export async function fetchPrice(name) {
	let res = await fetch(
		`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${name}&tsyms=USD,EUR&api_key=f459026d79b9444ed29576f403c8ed3c734a41d3b4ef1850f99c8c9f40a4bc72`
	);
	let result = await res.json();
	return result;
}
