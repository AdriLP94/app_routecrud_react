import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ElementoListaProducto = ({producto , guardarRecargaProductos}) => {

    const elminiarProducto = id => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Un plato eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
          }).then(async (result) => {
            if (result.value) {
                try {
                    const resultado = await axios.delete(`http://localhost:4000/restaurant/${id}`);
                    if (resultado.status === 200) {
                        guardarRecargaProductos(true);
                        Swal.fire(
                            'Borrado!',
                            'El plato ha sido borrado',
                            'success'
                        )
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Error',
                        'Algo ha ido mal, intentelo más tarde',
                        'error'
                    )
                }
            }
          })
        console.log("eliminar");
    }

    return (
        <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {producto.nombre}
                <span className="font-weight-bold">  {producto.precio}€</span>
            </p>
            <div>
                <Link to={`/productos/editar/${producto.id}`} className="btn btn-success mr-2">Editar</Link>
                <button type="button" className="btn btn-danger" onClick={() => elminiarProducto (producto.id)}>Eliminar &times;</button>
            </div>
        </li>
    );
};

export default ElementoListaProducto;