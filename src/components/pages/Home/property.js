import React, {useState, useEffect} from 'react';

import s from './property.module.css';
import Buttons from "../../UI/container/Button/buttons";
import RadioCheck from "../../UI/container/radio/radioCheck";

const Property = () => {

    const [aboutProperty, setAboutProperty] = useState('');
    const [typeProperty, setTypeProperty] = useState('');
    const [countUnit, setCountUnit] = useState('');

    const aboutPropertyHandle = e =>{
        setAboutProperty(e.target.value);
    };

    const typePropertyHandle = e =>{
        setTypeProperty(e.target.value);
    };

    const countUnitHandle = e =>{
        setCountUnit(e.target.value)
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
            <div className={s.item}>
                <h1>What property type would this be?</h1>
                <div className={s.modes}>
                    <form>
                        <RadioCheck name="propertyType" title="Single Family" value="singleFamily" forHtml="singleFamily" change={typePropertyHandle}/>
                        <RadioCheck name="propertyType" title="Townhouse or Condo" value="condo" forHtml="condo" change={typePropertyHandle}/>
                        {aboutProperty === 'primaryResidence' || aboutProperty === 'Investment' ? <RadioCheck name="propertyType" title="2 to 4 units" value="2to4units" forHtml="2to4Units" change={typePropertyHandle}/> : null}
                        <RadioCheck name="propertyType" title="Cooperative" value="cooperative" forHtml="cooperative" change={typePropertyHandle}/>
                    </form>
                </div>
            </div>
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
                <div className={s.item}>
                    <h1>What's the expected monthly rental income?</h1>
                    <div className={s.finance}>
                        <div className={s.markFinance}>
                            <p>$</p>
                            <input type="text"/>
                        </div>
                        <p>This rental income must appear on a lease agreement or on your tax return. If it doesn't, please enter $0.</p>
                    </div>
                </div> : null
            }
            <div className={s.item}>
                <h1>Estimated home value</h1>
                <div className={s.finance}>
                    <div className={s.markFinance}>
                        <p>$</p>
                        <input type="text"/>
                    </div>
                    <p>For example: $250,000</p>
                </div>
            </div>
            <div className={s.confirm}>
                <Buttons>Previous</Buttons>
                <Buttons>Next</Buttons>
            </div>
        </div>
    );
};

export default Property;