import React from 'react';
import {connect} from  'react-redux';
import { Image } from 'react-bootstrap';

import './sidebar.css';
import logo from "../../../assets/better-logo.svg";
import roofIcon from "../../../assets/roof-icon.png";


const Sidebar = ({location, city}) => {
    return (
        <div id="viewport">
            <div id="sidebar">
                <header>
                    <img src={logo} alt="logo"/>
                </header>
                <div className="content">
                    <div className="item">
                        <Image src={roofIcon} roundedCircle />
                        {location ?
                            <div className="address">
                                <p>{city}</p>
                                <span>{location}</span>
                            </div> :
                            <p>New refinance</p>
                        }
                    </div>
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