import React from 'react';

const Error = ({mensaje}) => {
    return (
        <p className="alert alert-danger p-3 my-5 text-venter text-uppercase font-weight-bold text-center">
            {mensaje}
        </p>
    );
};

export default Error;