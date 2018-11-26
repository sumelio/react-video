import React from 'react'

function RegularError(props) {
    return (
        <h1 style={{color: 'white'}}> Error paso {props.error.toString()} </h1>
    )
}

export default RegularError