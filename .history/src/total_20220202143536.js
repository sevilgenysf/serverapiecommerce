import React from 'react';

const Total = ({ totalprice }) => {
	return (
		<div className="checkout">
			<h1>Ödenecek Tutar.</h1>
			<div className="money">
				<h4>{totalprice}</h4>
				<p>TL</p>
			</div>
			<button>Alışverişi Tamamla</button>
			<p className="description">
				loreum ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<div className="cargo></div>
		</div>
	);
};

export default Total;
