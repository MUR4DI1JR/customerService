import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router";
import {db} from "../../../config/firebaseConfig";
import {connect} from 'react-redux';


import s from './sendDB.module.css';
import Buttons from "../../UI/container/Button/buttons";
import Inputs from "../../UI/container/Input/inputs";
import Sidebar from "../../UI/sidebar/sidebar";

const SendDb = ({location, states, city, code, aboutProperty, typeProperty, countUnit, investValue, homeValue}) => {
    const [email, setEmail] = useState('');
    const {pathname} = useLocation();

    const setEmailHandle = (e) =>{
      setEmail(e.target.value)
    };

    const sendEmailClick = (e) => {
        e.preventDefault();

        if(email !== ''){
            db.collection('database').add({
                email: email,
                location: location,
                city: city,
                code: code,
                states: states,
                aboutProperty: aboutProperty,
                typeProperty: typeProperty,
                countUnit: countUnit,
                investValue: investValue,
                homeValue: homeValue
            }).then(() => {
                alert("Good, wait for an answer!")
            })
        }else{
            return
        }
    };

    useEffect(() =>{
       window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.item}>
            <Sidebar/>
            <div className={s.block}>
                <div className={s.text_block}>
                    <h1>Save your progress</h1>
                    <p>Enter your email or use your Google account to save your progress.</p>
                </div>
                <div className={s.email}>
                    <Inputs inputType="email" type="email" value={email} changeText={setEmailHandle} placeholder="E-mail"/>
                    <Buttons clicked={sendEmailClick} btnType={location !== '' ? 'Success' : 'disable'}>SEND</Buttons>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    location: state.location.location,
    states: state.location.states,
    city: state.location.city,
    code: state.location.code,
    aboutProperty: state.location.aboutProperty,
    typeProperty: state.location.typeProperty,
    countUnit: state.location.countUnit,
    investValue: state.location.investValue,
    homeValue: state.location.homeValue
});


export default connect(mapStateToProps)(SendDb);