import { data } from '../data';

export const ListaProductos = ({
		totalProductos,
		setTotalProductos,
		conteoProductos,
		setConteoProductos,
		total,
		setTotal,
	}) => {

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
