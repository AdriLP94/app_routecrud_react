import React, {useState, useEffect} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';


const AñadirEditarProducto = ({history, guardarRecargaProductos, producto, mensaje}) => {

    const [nombre, guardarNombre] = useState("");
    const [precio, guardarPrecio] = useState("");
    const [categoria, guardarCategoria] = useState("");
    const [error, guardarError] = useState(false);

    useEffect ( () => {
        if (producto) {
            guardarNombre(producto.nombre);
            guardarPrecio(producto.precio);
            guardarCategoria(producto.categoria);
        }
    },[producto])

    const leerValorRadio = e => {
        guardarCategoria(e.target.value)
    }

    const agregarProducto = async e => {
        e.preventDefault();

        if (nombre === "" || precio === "" || categoria === "") {
            guardarError(true);
            return;
        }
        
        guardarError(false);
        try {
            const resultado = await axios.post('http://localhost:4000/restaurant', {
                nombre,
                precio,
                categoria,
            });
            if (resultado.status === 201) {
                Swal.fire(
                    'Plato creado!',
                    'El plato se ha creado correctamente',
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
        guardarRecargaProductos(true);
        history.push('/productos');
    }

    const editarProducto = async e => {
        e.preventDefault();

        if (nombre === "" || precio === "" || categoria === "") {
            guardarError(true);
            return;
        }

        guardarError(false);

        try {
            const resultado = await axios.put(`http://localhost:4000/restaurant/${producto.id}`, {
                nombre,
                precio,
                categoria
            });
            if (resultado.status === 200) {
                Swal.fire(
                    'Plato editado!',
                    'El plato se ha editado correctamente',
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
        guardarRecargaProductos(true);
        history.push('/productos');
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">{mensaje}</h1>
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <form
                className="mt-5"
                onSubmit={producto ? editarProducto : agregarProducto}
            >
                <div className="form-group">
                    <label>Nombre Plato</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Ej: Pizza carbonara"
                        onChange={e => guardarNombre(e.target.value)}
                        defaultValue={producto ? producto.nombre : null}
                    />
                </div>

                <div className="form-group">
                    <label>Precio Plato</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="precio"
                        placeholder="Ej: 7"
                        onChange={e => guardarPrecio(e.target.value)}
                        defaultValue={producto ? producto.precio : null}
                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="postre"
                        onChange={leerValorRadio}
                        defaultChecked={producto ? (producto.categoria === "postre" ? true: false ): null}
                    />
                    <label className="form-check-label">
                        Postre
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="bebida"
                        onChange={leerValorRadio}
                        defaultChecked={producto ? (producto.categoria === "bebida" ? true: false ): null}
                    />
                    <label className="form-check-label">
                        Bebida
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="principal"
                        onChange={leerValorRadio}
                        defaultChecked={producto ? (producto.categoria === "principal" ? true: false ): null}
                    />
                    <label className="form-check-label">
                        Principal
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="ensalada"
                        onChange={leerValorRadio}
                        defaultChecked={producto ? (producto.categoria === "ensalada" ? true: false ): null}
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Guardar cambios" />
            </form>
        </div>
    );
};

export default withRouter(AñadirEditarProducto);