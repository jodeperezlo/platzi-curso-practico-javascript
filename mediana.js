// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const handleIniciarProceso = async () => {
	let numOfElements = 0;
	let list = [];
	Swal.fire({
		title: 'Ingresa el número de elementos para el arreglo',
		input: 'number',
		inputAttributes: {
			autocapitalize: 'off',
			id: 'number-of-elements',
		},
		confirmButtonText: 'Acepto',
		confirmButtonColor: '#192229',
		showLoaderOnConfirm: true,
		preConfirm: () => {
			numOfElements = parseInt(document.getElementById('number-of-elements').value);
			if (numOfElements > 0) {
				Swal.fire({
					title:
						'Ingresa los elementos del arreglo, separados por comas. Ejemplo: 1,2,3,4,5',
					input: 'text',
					inputAttributes: {
						autocapitalize: 'off',
						id: 'list-of-elements',
					},
					confirmButtonText: 'Acepto',
					confirmButtonColor: '#192229',
					showLoaderOnConfirm: true,
					preConfirm: () => {
						list = document.getElementById('list-of-elements').value.split(',');
						if (list.length === numOfElements) {
							return Swal.showLoading();
						} else {
							Swal.fire({
								title: 'Error',
								text: 'El número de elementos no coincide con el número de elementos ingresados',
								confirmButtonText: 'Aceptar',
								confirmButtonColor: '#192229',
								icon: 'error',
							});
						}
					},
				}).then((result) => {
					if (result.value) {
						Swal.fire({
							title: 'Resultado',
							text: 'El resultado es: ' + list,
							icon: 'success',
							confirmButtonText: 'Aceptar',
							confirmButtonColor: '#192229',
						});
					}
				});
			} else {
				Swal.fire({
					title: 'Error',
					text: 'El número de elementos debe ser mayor a 0',
					icon: 'error',
					confirmButtonText: 'Aceptar',
					confirmButtonColor: '#192229',
				});
			}
		},
	});
};

const calculateArithmeticMedium = (list) => {
	const sumList = list.reduce(
		(accumulator = 0, currentValue) => accumulator + currentValue,
		0
	);
	const arithmeticMedium = sumList / list.length;
	return arithmeticMedium;
};

const calculateMedian = (list) => {
	const listLength = list.length;
	const median =
		listLength % 2 === 0
			? (list[listLength / 2] + list[listLength / 2 - 1]) / 2
			: list[Math.floor(listLength / 2)];
	return median;
};

const calculateMode = (list) => {
	const mode = list.reduce((accumulator, currentValue) => {
		if (accumulator[currentValue]) {
			accumulator[currentValue]++;
		} else {
			accumulator[currentValue] = 1;
		}
		return accumulator;
	}, {});
	const modeList = Object.keys(mode).filter(
		(key) => mode[key] === Math.max(...Object.values(mode))
	);
	return modeList;
};
