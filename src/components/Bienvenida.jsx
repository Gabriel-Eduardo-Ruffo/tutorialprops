import React from "react";

const Bienvenida = (props) => 
{
    //asignamos a una variable la propiedad que recibimos desde props
    const nombre1 = props.nombre;
    
    //accedemos directamente a la propiedad de props (objects extractor)
    const {nombre} = props;
    return (
        <div>
            <h2>BienVenido {nombre1}</h2>
            <h2>BienVenido {nombre}</h2>
        </div>
    )
}
export default Bienvenida;