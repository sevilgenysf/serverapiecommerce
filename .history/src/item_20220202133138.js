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
			</div>
		</div>
	);
};

export default CardItem;
