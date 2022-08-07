import React from "react";
import styled from 'styled-components';
import notch from '../images/notch.svg';
import mobileSignal from '../images/mobileSignal.svg'
import wifi from '../images/wifi.svg';
import battery from '../images/battery.svg';
import "../App.css";
import { CalculatorOutline } from "./styled/CalculatorOutline";
import { CalculatorStatusBar } from "./styled/CalculatorStatusBar";
import { CalculatorStatusBarLeft } from "./styled/CalculatorStatusBarLeft";
import { CalculatorStatusBarTime } from "./styled/CalculatorStatusBarTime";
import { CalculatorNotch } from "./styled/CalculatorNotch";
import { CalculatorStatusBarRight } from "./styled/CalculatorStatusBarRight";

interface CalculatorProps {}

class Calculator extends React.Component<CalculatorProps> {
    render() {
        return <CalculatorOutline>
            <CalculatorStatusBar>
                <CalculatorStatusBarLeft>
                    <CalculatorStatusBarTime>9.41</CalculatorStatusBarTime>
                </CalculatorStatusBarLeft>
                <CalculatorNotch>
                    <img src={notch} />    
                </CalculatorNotch>
                <CalculatorStatusBarRight>
                    <img src={mobileSignal} className={"MobileSignal"}/>
                    <img src={wifi} className={"Wifi"} />
                    <img src={battery} className={"Battery"}/>
                </CalculatorStatusBarRight>
            </CalculatorStatusBar>
        </CalculatorOutline>;
    }
}

export default Calculator ;