import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [card, setcard] = useState([]);
	let amount = 0;
	let itemcount = 0;
	useEffect(async () => {
		let data = await fetch('https://fakestoreapi.com/products?limit=6');
		let result = await data.json();
		setcard(result);
	}, []);

	return (
		<div className="App">
			<h1>
				Sepetim <p>{card.length} Adet</p>
				<h4>Ürün</h4>
			</h1>
		</div>
	);
}

export default App;
