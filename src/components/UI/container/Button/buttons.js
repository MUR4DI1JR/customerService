import React from 'react';
import './button.css';

const Buttons = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={["Button", props.btnType].join(" ")}
            disabled={props.dis}
        >
            {props.children}
        </button>
    );
};

export default Buttons;