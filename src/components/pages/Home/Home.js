import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import './home.css';
import logo from './../../../assets/better-logo.svg';

const Home = ({currentUser}) => {
    return (
        <div className="home">
            <div className="side-bar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>

            <div className="form-task">
                <div className="question">
                    <h1>What is the address of the property you are refinancing?</h1>
                    <p>Address</p>
                    <input
                        type="text"
                        placeholder="Enter a location"
                    />
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
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Home);