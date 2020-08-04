import React from 'react';
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
    let SideDrawerClasses = props.sideDrawerOpen ? classes.SideDrawer + ' ' + classes.Open :  classes.SideDrawer + ' ' + classes.Close;


    return ( 
        <React.Fragment>
        <Backdrop show={props.sideDrawerOpen} clicked={props.backdropClicked} />

        <div className={SideDrawerClasses}>
            <Logo height='10%' />
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </React.Fragment>
     );
}
 
export default SideDrawer;