import React from 'react';
import classes from "./BurgerIngreadientControls.css";
import BurgerIngreadientControl from "./BurgerIngreadientControl/BurgerIngreadientControl.js";


const BurgerIngreadientControls = props => {
    let ingrsControls = [...props.Ingrs].map((ingrObject,index) => (
        <BurgerIngreadientControl type={ingrObject.type} IngrEdit={props.IngreadientEdit} key={ingrObject.type + "-" + index} amount={ingrObject.amount} addBtnSt={ingrObject.addBtnDisabled} removeBtnSt={ingrObject.removeBtnDisabled} />
    ));


    return (
        <React.Fragment>
            <div className={classes.BurgerIngrCtrls}>
                <ul>
                    {ingrsControls}
                </ul>
                <button className={classes.OrderButton} onClick={props.order} disabled={props.OrderBtnDisab}>Order Now</button>

            </div>
        </React.Fragment>
    );
};

export default BurgerIngreadientControls;