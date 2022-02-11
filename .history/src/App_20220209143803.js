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
		getItems();
	}, []);

	return (
		<div className="App">
			<h1 className="myCard">
				Sepetim <p>{card.length} Adet</p>
				<h3>Ürün</h3>
			</h1>
			<div className="main">
				<div className="itemList">
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
					(card.forEach((item) => (amount += item.price)),
					(<Total totalprice={amount.toFixed(2)} />))
				}
			</div>
		</div>
	);
	function getItems() {
		let cardItems = document.querySelectorAll('.cardItem');
		cardItems.forEach((item, index) => {
			itemcount = cardItems.length;
			item.querySelectorAll('.delete').classList.add('visible');
			item.addEventListener('click', (e) => {
				switch (e.target.textContent) {
					case '+': {
						let count = item.querySelector('.amount').textContent;
						let productprice = item.querySelector('.details h2').textContent;
						count++;
						if (count > 1) {
							item.querySelector('.delete').classList.remove('visible');
						}
						item.querySelector('.amount').textContent = count;
						item.querySelector('.details h5').textContent =
							(count * productprice).toFixed(2) + ' TL.';
						let tprice = Math.max(
							document.querySelector('.checkout h4').textContent
						);
						let cargofreeprice = tprice + productprice * count;
						if (cargofreeprice > 500) {
							document.querySelector('.freeshipping').classList.add('visible');
							document
								.querySelector('.cargoamountTL')
								.classList.add('cargopricedelete');
						} else {
							document
								.querySelector('.freeshipping')
								.classList.remove('visible');
							document
								.querySelector('.cargoamountTL')
								.classList.remove('cargopricedelete');
						}
						document.querySelector('.checkout h4').textContent = Math.fround(
							tprice + productprice
						);
					}
				}
			});
		});
	}
}

export default App;
