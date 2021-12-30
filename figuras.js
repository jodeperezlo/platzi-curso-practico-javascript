// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const InputCuadrado = document.querySelector('#InputCuadrado');
const resultPerimeterSquare = document.querySelector('#resultPerimeterSquare');
const resultAreaSquare = document.querySelector('#resultAreaSquare');

const InputCircle = document.querySelector('#InputCircle');
const resultPerimeterCircle = document.querySelector('#resultPerimeterCircle');
const resultAreaCircle = document.querySelector('#resultAreaCircle');

const InputEqualsSidesTriangle = document.querySelector(
	'#InputEqualsSidesTriangle'
);
const InputBaseTriangleIso = document.querySelector('#InputBaseTriangleIso');
const resultPerimeterTriangleIso = document.querySelector(
	'#resultPerimeterTriangleIso'
);
const resultAreaTriangleIso = document.querySelector('#resultAreaTriangleIso');

const InputSideOneTriangle = document.querySelector('#InputSideOneTriangle');
const InputSideTwoTriangle = document.querySelector('#InputSideTwoTriangle');
const InputBaseTriangle = document.querySelector('#InputBaseTriangle');
const InputHeightTriangle = document.querySelector('#InputHeightTriangle');
const resultPerimeterTriangle = document.querySelector(
	'#resultPerimeterTriangle'
);
const resultAreaTriangle = document.querySelector('#resultAreaTriangle');

const perimeterSquare = (lado) => lado * 4;

const areaSquare = (lado) => lado * lado;

const diameterCircle = (radio) => radio * 2;

const PI = Math.PI;

const perimeterCircle = (radio) => {
	const diametro = diameterCircle(radio);
	return diametro * PI;
};

const areaCircle = (radio) => radio * radio * PI;

const perimeterTriangleIso = (lados, base) => 2 * lados + base;

const areaTriangleIso = (lados, base) =>
	(base / 4) * Math.sqrt(4 * lados * lados - base * base);

const perimeterTriangle = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangle = (base, altura) => (base * altura) / 2;

const calculatePerimeterSquare = () => {
	const lado = Number(InputCuadrado.value);
	const perimeter = perimeterSquare(lado);
	const perimeterResult = `El perímetro del cuadrado es: ${perimeter}`;
	resultPerimeterSquare.innerHTML = perimeterResult;
};

const calculateAreaSquare = () => {
	const lado = Number(InputCuadrado.value);
	const area = areaSquare(lado);
	const areaResult = `El área del cuadrado es: ${area}`;
	resultAreaSquare.innerHTML = areaResult;
};

const calculateBothSquare = () => {
	calculatePerimeterSquare();
	calculateAreaSquare();
};

const cleanSquareField = () => {
	InputCuadrado.value = '0';
	resultPerimeterSquare.innerHTML = '';
	resultAreaSquare.innerHTML = '';
};

const calculatePerimeterCircle = () => {
	const radio = Number(InputCircle.value);
	const perimeter = perimeterCircle(radio);
	const perimeterResult = `El perímetro del círculo es: ${perimeter}`;
	resultPerimeterCircle.innerHTML = perimeterResult;
};

const calculateAreaCircle = () => {
	const radio = Number(InputCircle.value);
	const area = areaCircle(radio);
	const areaResult = `El área del círculo es: ${area}`;
	resultAreaCircle.innerHTML = areaResult;
};

const calculateBothCircle = () => {
	calculatePerimeterCircle();
	calculateAreaCircle();
};

const cleanCircleField = () => {
	InputCircle.value = '0';
	resultPerimeterCircle.innerHTML = '';
	resultAreaCircle.innerHTML = '';
};

const calculatePerimeterTriangleIso = () => {
	const lados = Number(InputEqualsSidesTriangle.value);
	const base = Number(InputBaseTriangleIso.value);
	const perimeter = perimeterTriangleIso(lados, base);
	const perimeterResult = `El perímetro del triángulo isósceles es: ${perimeter}`;
	resultPerimeterTriangleIso.innerHTML = perimeterResult;
};

const calculateAreaTriangleIso = () => {
	const lados = Number(InputEqualsSidesTriangle.value);
	const base = Number(InputBaseTriangleIso.value);
	const area = areaTriangleIso(lados, base);
	const areaResult = `El área del triángulo isósceles es: ${area}`;
	resultAreaTriangleIso.innerHTML = areaResult;
};

const calculateBothTriangleIso = () => {
	calculatePerimeterTriangleIso();
	calculateAreaTriangleIso();
};

const cleanTriangleIsoFields = () => {
	InputEqualsSidesTriangle.value = '0';
	InputBaseTriangleIso.value = '0';
	resultPerimeterTriangleIso.innerHTML = '';
	resultAreaTriangleIso.innerHTML = '';
};

const calculatePerimeterTriangle = () => {
	const lado1 = Number(InputSideOneTriangle.value);
	const lado2 = Number(InputSideTwoTriangle.value);
	const base = Number(InputBaseTriangle.value);
	const perimeter = perimeterTriangle(lado1, lado2, base);
	const perimeterResult = `El perímetro del triángulo es: ${perimeter}`;
	resultPerimeterTriangle.innerHTML = perimeterResult;
};

const calculateAreaTriangle = () => {
	const base = Number(InputBaseTriangle.value);
	const altura = Number(InputHeightTriangle.value);
	const area = areaTriangle(base, altura);
	const areaResult = `El área del triángulo es: ${area}`;
	resultAreaTriangle.innerHTML = areaResult;
};

const calculateBothTriangle = () => {
	calculatePerimeterTriangle();
	calculateAreaTriangle();
};

const cleanTriangleFields = () => {
	InputSideOneTriangle.value = '0';
	InputSideTwoTriangle.value = '0';
	InputBaseTriangle.value = '0';
	InputHeightTriangle.value = '0';
	resultPerimeterTriangle.innerHTML = '';
	resultAreaTriangle.innerHTML = '';
};
