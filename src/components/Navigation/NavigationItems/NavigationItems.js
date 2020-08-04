import React from 'react';

import classes from "./NavigationItems.css";

const NavigationItems = props => {

    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
                <a href='/' className={classes.active}>Burger Builder</a>
            </li>
        </ul>
    );
};
 
export default NavigationItems;
