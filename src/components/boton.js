import React from "react";
import B from './image/boton.avif'
import './style/boton.css'
import {Link} from 'react-router-dom';

export default function Addb(props){
    return(
    <div className="fboton">
        <a href="/Formulario">
            <img src={B} className="boton"/>
        </a>
    </div>
    )
}
