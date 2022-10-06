const productos = [
	{
		producto: 'sillon',
		precio: 2000
	},
	{
		producto: 'mesa',
		precion: 2400
	}
]

const agregarTaxes = productos.map(item => {
	return {
		...item,
		taxes: item.precio * .16
	}
}) 

console.log(agregarTaxes)
