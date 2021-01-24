

import React from "react";
import "./input-field.css";


const InputField = ({handleChange, ...otherProps }) => {

    return(
    
    <div className="">
        <input className="input-field" onChange={handleChange} {...otherProps} />
    </div>
    )
}

export default InputField;