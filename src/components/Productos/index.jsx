import React from 'react';

const Producto = ({ producto }) => {
  return (
    <div className="list-group-item">
      <h3>{producto.nombre}</h3>
      <p className="mb-1">Precio: {producto.precio}</p>
      <p className="mb-1">Descripción: {producto.descripcion}</p>
    </div>
  );
};

export default Producto;
