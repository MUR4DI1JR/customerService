import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {setLocationUser, setCityUser, setCodeUser, setStatesUser, setUnitUser} from "../../../redux/db/dbAction";


import './home.css';
import logo from './../../../assets/better-logo.svg';
import roofIcon from './../../../assets/roof-icon.png';
import Buttons from "../../UI/container/Button/buttons";
import Address from "./Address";

const Home = ({location, states}) => {
    const clickBtn = (event) =>{
      event.preventDefault();

    };
    return (
        <div className="home">
            <div className="side-bar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <div className="item">
                        <img src={roofIcon} alt="ava"/>
                        {location ? <div>
                            <p>{location}</p>
                            <p>{states}</p>
                            </div>: <p>New refinance</p>
                        }
                     </div>
                </div>
            </div>
            <div className="block">
                <Address/>
                <div className="confirm">
                    {location ? <Buttons clicked={clickBtn} btnType={location ? "Success" : "Danger"}>Next</Buttons> : <Buttons btnType="disable" dis={true}>Next</Buttons>}
                </div>
            </div>
            <div className="right-side-bar">
                <NavLink to="/sign-in">Sign in</NavLink>
            </div>


            {/*{currentUser && currentUser ? (*/}
            {/*    <p>hello {currentUser.email}</p>*/}
            {/*): (<p>you are log out, please sign in</p>)}*/}
        </div>
    );
};

const mapStateToProps = state =>({
    currentUser: state.auth.currentUser,
    location: state.location.location,
    states: state.location.states
});

const mapDispatchToProps = dispatch => ({
    setLocationUser: location => dispatch(setLocationUser(location)),
    setCityUser: city => dispatch(setCityUser(city)),
    setStatesUser: states => dispatch(setStatesUser(states)),
    setUnitUser: unit => dispatch(setUnitUser(unit)),
    setCodeUser: code => dispatch(setCodeUser(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);