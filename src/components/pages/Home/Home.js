import React, {useState} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {setLocationUser} from "../../../redux/db/dbAction";


import './home.css';
import logo from './../../../assets/better-logo.svg';
import Buttons from "../../UI/container/Button/buttons";
import Inputs from "../../UI/container/Input/inputs";

const Home = ({currentUser, setLocationUser}) => {
    const [location, setLocation] = useState('');

    const clickBtn = (event) =>{
      event.preventDefault();
      if(!location.trim()){
          return
      }
      setLocationUser(location);
    };

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
                    <Inputs
                        type="text"
                        placeholder = "Enter a location"
                        value={location}
                        changeText={event => setLocation(event.target.value)}
                    />
                </div>
                <div className="confirm">
                    {location ? <Buttons clicked={clickBtn} btnType={location ? "Success" : "Danger"}>next</Buttons> : <button disabled>next</button>}
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
});

const mapDispatchToProps = dispatch => ({
    setLocationUser: location => dispatch(setLocationUser(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);