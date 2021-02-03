import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {nextClick} from "../../../redux/db/dbAction";


import s from'./home.module.css';
import logo from './../../../assets/better-logo.svg';
import roofIcon from './../../../assets/roof-icon.png';
import Buttons from "../../UI/container/Button/buttons";
import Address from "./Address";
import Property from "./property";

const Home = ({location, city,  next, code, nextClick}) => {
    return (
        <div className={s.home}>
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
                {
                    next ? <Property/> :
                        <div className={s.block}>
                            <Address/>
                            <div className={s.confirm}>
                                {location !== '' && code !== '' ?
                                    <Buttons clicked={nextClick} btnType={location ? "Success" : "Danger"}>Next</Buttons>
                                        :
                                    <Buttons btnType="disable" dis={true}>Next</Buttons>
                                }
                            </div>
                        </div>
                }
            <div className={s.right_side_bar}>
                <NavLink to="/sign-in">Sign in</NavLink>
            </div>


            {/*{currentUser && currentUser ? (*/}
            {/*    <p>hello {currentUser.email}</p>*/}
            {/*): (<p>you are log out, please sign in</p>)}*/}
        </div>
    );
};

const mapStateToProps = state =>({
    location: state.location.location,
    city: state.location.city,
    code: state.location.code,
    next: state.location.next
});

const mapDispatchToProps = dispatch => ({
    nextClick: next => dispatch(nextClick(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);