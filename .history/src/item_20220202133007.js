import React from 'react';

const CardItem = ({ itemid, image, category, price, title }) => {
	let p = 0;
	p = price;
	return (
		<div className="cardItem" id={itemid}>
			Card İtem
		</div>
	);
};

export default CardItem;
