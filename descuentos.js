// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
const InputPrice = document.getElementById('InputPrice');
const InputDiscount = document.getElementById('InputDiscount');
const InputCoupon = document.getElementById('InputCoupon');

const coupons = [
	{
		name: 'DESCUENTO_AMIGOS',
		discount: 15,
	},
	{
		name: 'DESCUENTO_FAMILIA',
		discount: 30,
	},
	{
		name: 'DESCUENTO_ESPECIAL',
		discount: 25,
	},
	{
		name: 'DEFAULT',
		discount: 0,
	},
];

const calculateDiscountPrice = (price, discount) => {
	return ((100 - discount) * price) / 100;
};

let couponValue = '';

const isCouponValueValid = (coupon) => {
	return coupon.name === couponValue;
};

const handleCalculateDiscountPrice = () => {
	couponValue = InputCoupon.value;
	const userCoupon = coupons.find(isCouponValueValid);
	let discount = InputDiscount.value || 0;
	if (userCoupon) {
		console.log('User coupon: ', userCoupon);
		discount = userCoupon.discount;
	}
	const result = calculateDiscountPrice(InputPrice.value || 0, discount);
	document.getElementById(
		'resultDiscountPrice'
	).innerHTML = `El precio con descuento es: $ ${result}`;
};

const handleReset = () => {
	InputPrice.value = '0';
	InputDiscount.value = '0';
	InputCoupon.value = '';
	document.getElementById('resultDiscountPrice').innerHTML = '';
};
