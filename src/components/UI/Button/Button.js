import React from 'react';
import classes from "./Button.css";

const Button = props => <button onClick={props.clicked} className={classes.Button + ' ' + classes[props.btnclass]}>{props.text}</button>;
 
export default Button;