import React, { Fragment } from 'react'
import spinner from './spinner.gif'

function Spinner() {
    return (
        <Fragment>
            <img src={spinner} alt="Loading" style={spinnerStyle} />
        </Fragment>
    )
}


const spinnerStyle = {
    margin: 'auto',
    width: '200px',
    display: 'block'
}

export default Spinner
