import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import s from './radioCheck.module.css';

const RadioCheck = ({value, title, forHtml, name, change}) => {

    return (
        <div className={s.radio}>
            <input
                type="radio"
                name={name}
                id={forHtml}
                value={value}
                onChange={change}
            />
            <label htmlFor={forHtml}>
                <div className={s.icon}>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
                {title}
            </label>
        </div>
    );
};

export default RadioCheck;