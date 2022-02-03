import React from 'react';

const CardItem = ({ itemid, image, category, price, title }) => {
	let p = 0;
	p = price;
	return (
		<div className="cardItem" id={itemid}>
			<img src={image} alt={title} />
			<div className="details">
				<h4>{title}</h4>
				<h6>{category}</h6>
				<h5>
					{price} <p>TL.</p>{' '}
				</h5>
				<h2>{price}</h2>
			</div>
			<div className="quantity">
				<button className="plus">+</button>
				<p className="amount">1</p>
			</div>
		</div>
	);
};

export default CardItem;
