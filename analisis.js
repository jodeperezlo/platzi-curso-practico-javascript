// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const salariosMex = mexico.map((persona) => persona.salary);

const salariosMexSorted = salariosMex.sort((salaryA, salaryB) => salaryA - salaryB);

const isPar = (salary) => salary % 2 === 0;

const calcularMediaAritmetica = (lista) => {
	const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	});
	const promedioLista = sumaLista / lista.length;
	return promedioLista;
};

const medianaSalarios = (salarios) => {
	const mitad = parseInt(salarios.length / 2);
	if (isPar(salarios.length)) {
		const personaMitad1 = salarios[mitad - 1];
		const personaMitad2 = salarios[mitad];
		const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
		return mediana;
	} else {
		return salarios[mitad];
	}
};

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

const spliceStart = salariosMexSorted.length * 0.9;

const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log(
	`La mediana de los salarios de México es: ${medianaGeneralMex} \n La mediana Top 10% de México es: ${medianaTop10Mex}`
);
