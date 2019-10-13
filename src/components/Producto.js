import React, {useState} from 'react';
import Error from './Error';


const Producto = () => {

    const [nombre, guardarNombre] = useState("");
    const [precio, guardarPrecio] = useState("");
    const [categoria, guardarCategoria] = useState("");
    const [error, guardarError] = useState(false);

    const leerValorRadio = e => {
        guardarCategoria(e.target.value)
    }

    const agregarProducto = e => {
        e.preventDefault();
        if (nombre === "" || precio === "" || categoria === "") {
            guardarError(true);
            return;
        }
        guardarError(false);
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Producto</h1>
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <form
                className="mt-5"
                onSubmit={agregarProducto}
            >
                <div className="form-group">
                    <label>Nombre Plato</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Ej: Pizza carbonara"
                        onChange={e => guardarNombre(e.target.value)}
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
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
    );
};

export default Producto;