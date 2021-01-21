import React, {useState} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {setLocationUser, setCityUser, setCodeUser, setStatesUser, setUnitUser} from "../../../redux/db/dbAction";


import './home.css';
import logo from './../../../assets/better-logo.svg';
import Buttons from "../../UI/container/Button/buttons";
import Inputs from "../../UI/container/Input/inputs";

const Home = ({currentUser, setLocationUser, setCityUser, setCodeUser, setStatesUser, setUnitUser}) => {
    const [location, setLocation] = useState('');
    const [city, setCity] = useState('');
    const [states, setStates] = useState('');
    const [code, setCode] = useState('');
    const [unit, setUnit] = useState('');

    const clickBtn = (event) =>{
      event.preventDefault();
      if(!location.trim()){
          return
      }
      setLocationUser(location);
      setCodeUser(code);
      setUnitUser(unit);
      setStatesUser(states);
      setCityUser(city)
    };

    return (
        <div className="home">
            <div className="side-bar">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="item">
                    <img src="" alt="ava"/>
                    <p>{location}</p><p>{states}</p>
                </div>
            </div>

            <div className="form-task">
                <div className="question">
                    <h1>What is the address of the property you are refinancing?</h1>
                    <div className="input-block">
                        <div className="input-item">
                            <p>Address</p>
                            <Inputs
                                type="text"
                                placeholder = "Enter a location"
                                value={location}
                                changeText={event => setLocation(event.target.value)}
                            />
                        </div>
                        {location ?
                            <div>
                                <p>Apt/Unit</p>
                                <Inputs
                                    type="text"
                                    inputType="unit"
                                    value={unit}
                                    changeText={event => setUnit(event.target.value)}
                                />
                            </div> : console.log("ww")}
                    </div>
                    {location ?
                        <div className="input-items">
                            <div className="input-item-1">
                                <p>city</p>
                                <Inputs type="text" inputType="city" value={city} changeText={event => setCity(event.target.value)}/>
                            </div>
                            <div className="input-item-2">
                                <p>state</p>
                                <Inputs type="text" inputType="state" value={states} changeText={event => setStates(event.target.value)}/>
                            </div>
                            <div className="input-item-3">
                                <p>ZIP code</p>
                                <Inputs type="text" inputType="code" value={code} changeText={event => setCode(event.target.value)}/>
                            </div>
                        </div> : console.log("muradil")
                    }
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
    setLocationUser: location => dispatch(setLocationUser(location)),
    setCityUser: city => dispatch(setCityUser(city)),
    setStatesUser: states => dispatch(setStatesUser(states)),
    setUnitUser: unit => dispatch(setUnitUser(unit)),
    setCodeUser: code => dispatch(setCodeUser(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);