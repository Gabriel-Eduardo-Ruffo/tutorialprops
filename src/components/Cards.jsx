import React from "react";

const Cards = (props) => {
    const {imagen, titulo, texto} = props;
    const myStyle ={width:'18rem',border: '2px solid red'};

    //Para realizar un estilo en la misma linea del html es usando doble llave 
    //style={{propiedad a configurar  :  "valor entre comillas"}} 
    //ejemplo del style --> style={{width:'18rem',border: '2px solid red'}}
    return(
        <div className="card" style={myStyle}>
            <img src={imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
                <a href="" className="btn btn-primary">Ver mas</a>
            </div>
        </div>
    )
}
export default Cards