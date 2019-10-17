import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import AñadirEditarProducto from './components/AñadirEditarProducto';
import ListaProductos from './components/ListaProductos';

function App() {

  const [productos, guardarProductos] = useState([]);
  const [recargaProductos, guardarRecargaProductos] = useState(true);

  useEffect (()=>{
    if (recargaProductos) {
      const consultaApi = async () => {
        const resultado = await axios.get('http://localhost:4000/restaurant');
        guardarProductos(resultado.data);
      }
      consultaApi();
      guardarRecargaProductos(false);
    }
  },[recargaProductos])

  return (
  <Router>
    <Header/>
    <main className="container mt-5">
    <Switch>
      <Route exact path="/productos" render={ () => 
        <ListaProductos 
        productos={productos}
        guardarRecargaProductos={guardarRecargaProductos}/>
      } />
      <Route exact path="/nuevo_producto" render={ ()=>
        <AñadirEditarProducto 
          guardarRecargaProductos={guardarRecargaProductos}
          mensaje="Añadir nuevo producto"/>
      } />
      <Route exact path="/productos/editar/:id"  render={ props => {
        const idProducto = parseInt(props.match.params.id);
        const producto = productos.filter( producto => producto.id === idProducto);
        return (<AñadirEditarProducto 
          guardarRecargaProductos={guardarRecargaProductos}
          producto={producto[0]}
          mensaje="Editar producto"/>)
      }}/>
    </Switch>
    </main>
    <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
  </Router>
  );
}

export default App;
