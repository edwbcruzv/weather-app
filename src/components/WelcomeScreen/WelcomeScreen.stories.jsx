import React from 'react';
import WelcomeScreen from './WelcomeScreen';


export default {
    title: "WelcomeScreen",
    component: WelcomeScreen
}

export const WelcomeScreemExample = () =>{
    return <WelcomeScreen><h2>Esto se va a props.children</h2></WelcomeScreen>
}