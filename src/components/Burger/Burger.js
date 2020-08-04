import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.js";
import classes from "./Burger.css";

const strNumInc = (str,plusNum) => {
    let str_arr = str.split('-');
    str_arr[2]  = parseInt(str_arr[2]) + plusNum;
    return str_arr.join('-');
}

const Burger = props => {
    let burgerIngKey = "burger-ingreadient-0";
    let Ingreadients = [];

    let p=1;

    for(let ingreadient of props.Ingreadients){
        for(let i=0; i<ingreadient.amount; i++){
            Ingreadients.push(<BurgerIngredient type={ingreadient.type} key={strNumInc(burgerIngKey,p)} />);
            p++;
        }
    }


    return (
        <React.Fragment>
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" key={burgerIngKey} />
                {props.massage}
                {Ingreadients}
                <BurgerIngredient type="bread-bottom" key={strNumInc(burgerIngKey,20)} />
            </div>
            <p className={classes.Price}>${parseFloat(props.price).toFixed(2)}</p>
        </React.Fragment>
    );
}

export default Burger;