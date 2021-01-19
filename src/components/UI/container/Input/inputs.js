import React from 'react';
import './input.css';

const Inputs = (props) => {
    return (
        <input
            type={props.type}
            className={["Input", props.inputType].join(" ")}
            value={props.value}
            onChange={props.changeText}
            placeholder={props.placeholder}
        />
    );
};

export default Inputs;