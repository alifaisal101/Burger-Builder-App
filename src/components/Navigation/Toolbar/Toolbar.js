import React from 'react';
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo.js";
import NavigationItems from "./../NavigationItems/NavigationItems";

const Toolbar = props => (
    <header className={classes.Toolbar}>

        <button onClick={props.menuOpen} className={classes.MenuBtn + ' ' + classes.PhoneOnly}>Menu</button>
        
        <Logo height='90%' />

        <nav className={classes.DesktopOnly}><NavigationItems /></nav>
    </header>
);
  
export default Toolbar;