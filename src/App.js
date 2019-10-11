import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Producto from './components/Producto';
import ListaProductos from './components/ListaProductos';

function App() {
  return (
  <Router>
    <Header/>
    <main className="container mt-5">
    <Switch>
      <Route exact path="/productos" component={ListaProductos}/>
      <Route exact path="/nuevo_producto" component={Producto}/>
      <Route exact path="/productos/editar?id=:id" component={Producto}/>
    </Switch>
    </main>
    <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
  </Router>
  );
}

export default App;
