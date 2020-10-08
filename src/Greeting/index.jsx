import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.css';


const Greeting = (props) => { 
    return(
        <>
        
        <h1>Hi, {props.name} you are the imposter in among us , let's start the game</h1>
        
        </>
    )};

export default Greeting;
