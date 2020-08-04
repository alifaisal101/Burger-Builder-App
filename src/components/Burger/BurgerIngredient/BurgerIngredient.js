import React from 'react';
import classes from "./BurgerIngredient.css";
import propTypes from 'prop-types';

const BurgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-top'):
            ingredient = (<div className={classes.BreadTop}><span className={classes.dot}>.</span>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                         </div>);
            break;
        case ('bread-bottom'):
            ingredient = (<div className={classes.BreadBottom}><span className={classes.dot}>.</span></div>);
            break;
        case ('meat'):
            ingredient = (<div className={classes.Meat}><span className={classes.dot}>.</span></div>);
            break;
        case ('salad'):
            ingredient = (<div className={classes.Salad}><span className={classes.dot}>.</span></div>);
            break;
        case ('cheese'):
            ingredient = (<div className={classes.Cheese}><span className={classes.dot}>.</span></div>);
            break;
        case ('bacon'):
            ingredient = (<div className={classes.Bacon}><span className={classes.dot}>.</span></div>);
            break;
        default :
            ingredient = null;
    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type:propTypes.string.isRequired
};

export default BurgerIngredient;