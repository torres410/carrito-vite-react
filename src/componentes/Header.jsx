import { useState } from 'react';

export const Header = ({
	totalProductos,
	setTotalProductos,
	total,
	conteoProductos,
	setConteoProductos,
	setTotal,
}) => {
	const [activo, setActivo] = useState(false);

	const eliminarProducto = producto => {
		const resultados = totalProductos.filter(
			item => item.id !== producto.id
		);

		setTotal(total - producto.precio * producto.cantidad);
		setConteoProductos(conteoProductos - producto.cantidad);
		setTotalProductos(resultados);
	};

	return (
		<header>
			<h1>Tienda en línea</h1>

			<div className='contenedor-icono'>
				<div
					className='contenedor-carrito-icono'
					onClick={() => setActivo(!activo)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icono-carrito'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='conteo-productos'>
						<span id='contador-productos'>{conteoProductos}</span>
					</div>
				</div>

				<div
					className={`contenedor-carrito-productos ${
						activo ? '' : 'ocultar-carrito'
					}`}
				>
					{totalProductos.length ? (
						<>
							<div className='fila-producto'>
								{totalProductos.map(producto => (
									<div className='carrito-producto' key={producto.id}>
										<div className='info-carrito-producto'>
											<span className='cantidad-producto-carrito'>
												{producto.cantidad}
											</span>
											<p className='titulo-producto-carrito'>
												{producto.nombreProducto}
											</p>
											<span className='precio-producto-carrito'>
												${producto.precio}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='cerrar-icono'
											onClick={() => eliminarProducto(producto)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='carrito-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-vaciar-carrito' onClick={limpiarCarrito}>
								Vaciar carrito
							</button>
						</>
					) : (
						<p className='carrito-vacio'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};
