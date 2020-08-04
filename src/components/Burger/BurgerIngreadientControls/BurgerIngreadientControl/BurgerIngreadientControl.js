import React from 'react';
import classes from "./BurgerIngreadientControl.css";
import propTypes from 'prop-types';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const BurgerIngreadientControl = props => (
    <li className={classes.BuildControl}>
        <div className={classes.Label}>{capitalizeFirstLetter(props.type)}</div>
        

        <button className={classes.More}  onClick={props.IngrEdit.bind(this,props.type,1)} disabled={props.addBtnSt}>More</button>
        <button className={classes.Less} onClick={props.IngrEdit.bind(this,props.type,-1)} disabled={props.removeBtnSt}>Less</button>
    </li> 
);

BurgerIngreadientControl.propTypes = {

    type:       propTypes.string.isRequired,
    amount:     propTypes.number.isRequired,
    IngrEdit:   propTypes.func.isRequired,

}

export default React.memo(BurgerIngreadientControl);