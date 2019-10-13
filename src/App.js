import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Producto from './components/Producto';
import ListaProductos from './components/ListaProductos';

function App() {

  const [productos, guardarProductos] = useState([]);

  useEffect(()=>{
    const consultaApi = async () => {
      const resultado = await axios.get('http://localhost:4000/restaurant');
      guardarProductos(resultado.data);
    }
    consultaApi();
  },[])

  return (
  <Router>
    <Header/>
    <main className="container mt-5">
    <Switch>
      <Route exact path="/productos" render={ () => 
        <ListaProductos productos={productos}/>
      } />
      <Route exact path="/nuevo_producto" component={Producto}/>
      <Route exact path="/productos/editar/:id" component={Producto}/>
    </Switch>
    </main>
    <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
  </Router>
  );
}

export default App;
