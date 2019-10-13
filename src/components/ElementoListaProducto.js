import React from 'react';
import {Link} from 'react-router-dom';

const ElementoListaProducto = ({producto}) => {

    const elminiarProducto = id => {
        console.log("eliminar");
    }

    return (
        <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {producto.nombre}
                <span className="font-weight-bold">{producto.precio} €</span>
            </p>
            <div>
                <Link to={`/productos/editar/${producto.id}`} className="btn btn-success mr-2">Editar</Link>
                <button type="button" className="btn btn-danger" onClick={() => elminiarProducto (producto.id)}>Eliminar &times;</button>
            </div>
        </li>
    );
};

export default ElementoListaProducto;