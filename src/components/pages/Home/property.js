import React, {useState} from 'react';
import check from './../../../assets/checked.svg';

import s from './property.module.css';
import Buttons from "../../UI/container/Button/buttons";
import RadioCheck from "../../UI/container/radio/radioCheck";

const Property = () => {

    return (
        <div className={s.property}>
            <div className={s.item}>
                <h1>Tell us more about the property you are refinancing</h1>
                <div className={s.modes}>
                    <form>
                        <RadioCheck name="refinancing" title="Primary check" value="primaryResidence" forHtml="primaryCheck"/>
                        <RadioCheck name="refinancing" title="Second home" value="secondHome" forHtml="secondHome"/>
                        <RadioCheck name="refinancing" title="Investment" value="Investment" forHtml="investment"/>
                    </form>
                </div>
            </div>
            <div className={s.item}>
                <h1>What property type would this be?</h1>
                <div className={s.modes}>
                    <form>
                        <RadioCheck name="propertyType" title="Single Family" value="Single Family" forHtml="singleFamily"/>
                        <RadioCheck name="propertyType" title="Townhouse or Condo" value="Condo" forHtml="condo"/>
                        {/*<RadioCheck name="propertyType" title="2 to 4 units" value="2 to 4 units" forHtml="2to4Units"/>*/}
                        <RadioCheck name="propertyType" title="Cooperative" value="Cooperative" forHtml="cooperative"/>
                    </form>
                </div>
            </div>
            {/*{quantity ?*/}
            {/*    <div>*/}
            {/*        <div className={s.item}>*/}
            {/*            <h1>How many units will the property have?</h1>*/}
            {/*            <div className={s.modes}>*/}
            {/*                <form>*/}
            {/*                    <RadioCheck name="numberOfUnits" title="2 Units" value="2"/>*/}
            {/*                    <RadioCheck name="numberOfUnits" title="3 Units" value="3"/>*/}
            {/*                    <RadioCheck name="numberOfUnits" title="4 Units" value="4"/>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    :*/}
            {/*    null*/}
            {/*}*/}
            {/*{investValue ?*/}
            {/*    <div className={s.item}>*/}
            {/*        <h1>What's the expected monthly rental income?</h1>*/}
            {/*        <div className={s.finance}>*/}
            {/*            <div className={s.markFinance}>*/}
            {/*                <p>$</p>*/}
            {/*                <input type="text"/>*/}
            {/*            </div>*/}
            {/*            <p>This rental income must appear on a lease agreement or on your tax return. If it doesn't, please enter $0.</p>*/}
            {/*        </div>*/}
            {/*    </div> : null*/}
            {/*}*/}
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