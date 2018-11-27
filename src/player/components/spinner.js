import React from 'react'
import './spinner.css'

const Spinner = props => (
   props.active?
            <div className="Spinner">
                <span>Cargando...</span>
            </div>
    : null
)

export default Spinner