import React from 'react';

const Total = ({ totalprice }) => {
	return (
		<div className="checkout">
			<h1>Ödenecek Tutar.</h1>
			<div className="money">
				<h4>{total}</h4>
			</div>
		</div>
	);
};

export default Total;
