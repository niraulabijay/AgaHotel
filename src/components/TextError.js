import React from 'react'

const TextError = (props) => {
 return(
     <>
        <span style={{color: "red", fontSize: '11px'}}>
            <sup>*</sup>
            {props.children}
        </span>
     </>
 )
}

export default TextError