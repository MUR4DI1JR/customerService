import React from 'react';
import check from './../../../../assets/checked.svg';
import s from './radioCheck.module.css';

const RadioCheck = ({value, title, forHtml, name, change}) => {
    return (
        <label htmlFor={forHtml}>
            <span></span>
            <input
                className={s.radioChecked}
                type="radio"
                name={name}
                id={forHtml}
                value={value}
                onChange={change}
            />
            <p>{title}</p>
        </label>
    );
};

export default RadioCheck;