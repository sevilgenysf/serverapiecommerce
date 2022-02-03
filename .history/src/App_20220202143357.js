import React, { useEffect, useState } from 'react';
import './App.css';
import CardItem from './item';
import Total from './total';

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
				<h3>Ürün</h3>
			</h1>
			<div>
				{card.map((item) => (
					<CardItem
						key={item.id}
						itemid={item.id}
						image={item.image}
						title={item.title}
						category={item.category}
						price={item.price}
					/>
				))}
			</div>
			{
				(card.forEach((item) => ( += item.price)),
				(<Total totalprice={amount.toFixed(2)} />))
			}
		</div>
	);
}

export default App;
