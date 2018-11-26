import React from 'react';
import './modal.css'
function Modal(props) {
    return (
        <div className="Modal">
            Modal
         {props.children}
         <button onClick={props.handleCloseClick}>Cerrar</button>
         </div>
    )
}

export default Modal;