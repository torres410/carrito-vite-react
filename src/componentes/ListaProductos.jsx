import { data } from '../data';

export const ListaProductos = ({
	totalProductos,
	setTotalProductos,
	conteoProductos,
	setConteoProductos,
	total,
	setTotal,
	}) => {

	const agregarProducto = producto => {
		if (totalProductos.find(item => item.id === producto.id)) {
			const productos = totalProductos.map(item =>
				item.id === producto.id
					? { ...item, cantidad: item.cantidad + 1 }
					: item
			);
			setTotal(total + producto.precio * producto.cantidad);
			setConteoProductos(conteoProductos + producto.cantidad);
			return setTotalProductos([...productos]);
		}

		setTotal(total + producto.precio * producto.cantidad);
		setConteoProductos(conteoProductos + producto.cantidad);
		setTotalProductos([...totalProductos, producto]);
	};
	
	return (
		<div className='contenedor-items'>
			{data.map(producto => (
				<div className='item' key={producto.id}>
					<figure>
						<img src={producto.img} alt={producto.nombreProducto} />
					</figure>
					<div className='info-producto'>
						<h2>{producto.nombreProducto}</h2>
						<p className='precio'>${producto.precio}</p>
						<button onClick={() => agregarProducto(producto)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
