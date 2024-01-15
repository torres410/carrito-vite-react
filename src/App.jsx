import { useState } from 'react';
import { Header } from './componentes/Header';
import { ListaProductos } from './componentes/ListaProductos';

function App() {
	const [totalProductos, setTotalProductos] = useState([]);
	const [total, setTotal] = useState(0);
	const [conteoProductos, setConteoProductos] = useState(0);

return (
	<>
		<Header
			totalProductos={totalProductos}
			setTotalProductos={setTotalProductos}
			total={total}
			setTotal={setTotal}
			conteoProductos={conteoProductos}
			setConteoProductos={setConteoProductos}
		/>
		<ListaProductos
			totalProductos={totalProductos}
			setTotalProductos={setTotalProductos}
			total={total}
			setTotal={setTotal}
			conteoProductos={conteoProductos}
			setConteoProductos={setConteoProductos}
		/>
	</>
	);
}

export default App;
