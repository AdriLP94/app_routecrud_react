import React, {Fragment} from 'react';
import ElementoListaProducto from './ElementoListaProducto';

const ListaProductos = ({productos}) => {
    return (
        <Fragment>
            <h1 className="text-center">Lista producto</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ElementoListaProducto 
                    key={producto.id}
                    producto={producto}/>
                ))}
            </ul>
        </Fragment>
    );
};

export default ListaProductos;