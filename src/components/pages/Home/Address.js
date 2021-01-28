import React from 'react';
import {connect} from 'react-redux';
import {setLocationUser, setCityUser, setCodeUser, setStatesUser, setUnitUser} from "../../../redux/db/dbAction";
import Inputs from "../../UI/container/Input/inputs";

import s from './address.module.css';

const Address = ({ location, code, unit, states, city, setLocationUser, setCityUser, setCodeUser, setStatesUser, setUnitUser}) => {

    return (
        <div className={s.form_task}>
            <div className={s.question}>
                <h1>What is the address of the property you are refinancing?</h1>
                <div className={s.input_block}>
                    <div className={s.input_item}>
                        <p>Address</p>
                        <Inputs
                            type="text"
                            placeholder = "Enter a location"
                            value={location}
                            changeText={event => setLocationUser(event.target.value)}
                        />
                    </div>
                    {location ?
                        <div>
                            <p>Apt/Unit</p>
                            <Inputs
                                type="text"
                                inputType={unit ? "unit" : "unit error"}
                                value={unit}
                                changeText={event => setUnitUser(event.target.value)}
                            />
                        </div> : null}
                </div>
                {location ?
                    <div className={s.input_items}>
                        <div className={s.input_item_1}>
                            <p>city</p>
                            <Inputs
                                type="text"
                                inputType={city ? "city" : "city error"}
                                value={city}
                                changeText={event => setCityUser(event.target.value)}
                            />
                        </div>
                        <div className={s.input_item_2}>
                            <p>state</p>
                            <Inputs
                                type="text"
                                inputType={states ? "state" : "state error"}
                                value={states}
                                changeText={event => setStatesUser(event.target.value)}
                            />
                        </div>
                        <div className={s.input_item_3}>
                            <p>ZIP code</p>
                            <Inputs
                                type="text"
                                inputType={code ? "code" : "code error"}
                                value={code}
                                changeText={event => setCodeUser(event.target.value)}
                            />
                        </div>
                    </div> : null
                }
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    location: state.location.location,
    unit: state.location.unit,
    city: state.location.city,
    states: state.location.states,
    code: state.location.code
});

const mapDispatchToProps = dispatch => ({
    setLocationUser: location => dispatch(setLocationUser(location)),
    setCityUser: city => dispatch(setCityUser(city)),
    setStatesUser: states => dispatch(setStatesUser(states)),
    setUnitUser: unit => dispatch(setUnitUser(unit)),
    setCodeUser: code => dispatch(setCodeUser(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);