import React from 'react';

const CardItem = ({ itemid, image, category, price, title }) => {
	let p = 0;
	p = price;
	return (
		<div className="cardItem" id={itemid}>
			<img src={image} alt={title} />
		</div>
	);
};

export default CardItem;
