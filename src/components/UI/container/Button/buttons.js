import React from 'react';
import './button.css';

const Buttons = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={["Button", props.btnType].join(" ")}
        >
            {props.children}
        </button>
    );
};

export default Buttons;