import React from 'react';
import {connect} from  'react-redux';

import s from "../../pages/Home/home.module.css";
import logo from "../../../assets/better-logo.svg";
import roofIcon from "../../../assets/roof-icon.png";


const Sidebar = ({location, city}) => {
    return (
        <div className={s.side_bar}>
            <div className={s.logo}>
                <img src={logo} alt="logo"/>
                <div className={s.item}>
                    <img src={roofIcon} alt="ava"/>
                    {location ?
                        <div className={s.address}>
                            <p>{city}</p>
                            <span>{location}</span>
                        </div>:
                        <p>New refinance</p>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    location: state.location.location,
    city: state.location.city
});

export default connect(mapStateToProps)(Sidebar);