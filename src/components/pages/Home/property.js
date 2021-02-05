import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";

import s from './property.module.css';
import Buttons from "../../UI/container/Button/buttons";
import RadioCheck from "../../UI/container/radio/radioCheck";
import {
    backClick,
    setInvestValue,
    setCountUnit,
    setAboutProperty,
    setTypeProperty,
    setHomeValue
} from "../../../redux/db/dbAction";

const Property = ({ aboutProperty, typeProperty, countUnit, investValue,homeValue, backClick, setInvestValue, setCountUnit, setAboutProperty, setTypeProperty, setHomeValue}) => {


    const aboutPropertyHandle = e =>{
        setAboutProperty(e.target.value);
    };

    const typePropertyHandle = e =>{
        setTypeProperty(e.target.value);
    };

    const countUnitHandle = e =>{
        setCountUnit(e.target.value)
    };

    const investValueHandle = ({target}) =>{
        setInvestValue(target.value.replace(/\D*/g, ""))
    };

    const homeValueHandle = ({target}) =>{
        setHomeValue(target.value.replace(/\D*/g, ""))
    };

    const getValue = (value) => {
        return value.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    };



    return (
        <div className={s.property}>
            <div className={s.item}>
                <h1>Tell us more about the property you are refinancing</h1>
                <div className={s.modes}>
                    <form>
                        <RadioCheck name="refinancing" title="Primary check" value="primaryResidence" forHtml="primaryCheck" change={aboutPropertyHandle}/>
                        <RadioCheck name="refinancing" title="Second home" value="secondHome" forHtml="secondHome" change={aboutPropertyHandle}/>
                        <RadioCheck name="refinancing" title="Investment" value="Investment" forHtml="investment" change={aboutPropertyHandle}/>
                    </form>
                </div>
            </div>
            {aboutProperty !== '' ? <div className={s.item}>
                <h1>What property type would this be?</h1>
                <div className={s.modes}>
                    <form>
                        <RadioCheck name="propertyType" title="Single Family" value="singleFamily" forHtml="singleFamily" change={typePropertyHandle}/>
                        <RadioCheck name="propertyType" title="Townhouse or Condo" value="condo" forHtml="condo" change={typePropertyHandle}/>
                        {aboutProperty === 'primaryResidence' || aboutProperty === 'Investment' ? <RadioCheck name="propertyType" title="2 to 4 units" value="2to4units" forHtml="2to4Units" change={typePropertyHandle}/> : null}
                        <RadioCheck name="propertyType" title="Cooperative" value="cooperative" forHtml="cooperative" change={typePropertyHandle}/>
                    </form>
                </div>
            </div>: null}
            {typeProperty === '2to4units' ?
                <div>
                    <div className={s.item}>
                        <h1>How many units will the property have?</h1>
                        <div className={s.modes}>
                            <form>
                                <RadioCheck name="numberOfUnits" title="2 Units" value="2" forHtml="2" change={countUnitHandle}/>
                                <RadioCheck name="numberOfUnits" title="3 Units" value="3" forHtml="3" change={countUnitHandle}/>
                                <RadioCheck name="numberOfUnits" title="4 Units" value="4" forHtml="4" change={countUnitHandle}/>
                            </form>
                        </div>
                    </div>
                </div>
                :
                null
            }
            {aboutProperty === 'Investment' ?
                <div className={`${s.item} ${s.investValue}`}>
                    <h1>What's the expected monthly rental income?</h1>
                    <div className={s.finance}>
                        <div className={s.markFinance}>
                            <span>$</span>
                            <input type="tel"  onChange={investValueHandle} value={getValue(investValue)}/>
                        </div>
                        {investValue.trim() ? null: <p className={s.errorValue}>Invalid amount.</p>}
                        <p>This rental income must appear on a lease agreement or on your tax return. If it doesn't, please enter $0.</p>
                    </div>
                </div> : null
            }
            {typeProperty !== '' ? <div className={s.item}>
                <h1>Estimated home value</h1>
                <div className={s.finance}>
                    <div className={`${s.markFinance} ${s.userValue}`}>
                        <span>$</span>
                        <input type="tel" onChange={homeValueHandle} value={getValue(homeValue)}/>
                    </div>
                    {homeValue.length < 5 ? <p className={s.errorValue}>Value must be more than $10,000.</p> : null}
                    <p>For example: $250,000</p>
                </div>
            </div>: null}
            <div className={s.confirm}>
                <Buttons clicked={backClick} btnType="back">Previous</Buttons>
                <Buttons btnType={homeValue.length < 5 ? "disable" : "Success"}><NavLink to="/send-email">Next</NavLink></Buttons>
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    aboutProperty: state.location.aboutProperty,
    typeProperty: state.location.typeProperty,
    countUnit: state.location.countUnit,
    investValue: state.location.investValue,
    homeValue: state.location.homeValue
});

const mapDispatchToProps = dispatch => ({
    backClick: next => dispatch(backClick(false)),
    setAboutProperty: about => dispatch(setAboutProperty(about)),
    setTypeProperty: type => dispatch(setTypeProperty(type)),
    setCountUnit: count => dispatch(setCountUnit(count)),
    setInvestValue: invest => dispatch(setInvestValue(invest)),
    setHomeValue: homeValue => dispatch(setHomeValue(homeValue))
});


export default connect(mapStateToProps, mapDispatchToProps)(Property);
