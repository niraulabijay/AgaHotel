import React from 'react'


const ErrorComponent = (props) => {
    return(
        <span style={{fontSize: '10px', color:'red'}}>
            {props.children}
        </span>
    )
}

export default ErrorComponent