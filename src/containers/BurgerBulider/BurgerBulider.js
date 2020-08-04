import React, { Component } from 'react';

import Burger from "../../components/Burger/Burger.js";
import BurgerIngreadientControls from "../../components/Burger/BurgerIngreadientControls/BurgerIngreadientControls.js";
import classes from "./BurgerBulider.css";
import Modal from "../../components/UI/Modal/Modal.js";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery.js";

const INGREADIENTS_PRICES = [
    {type:'meat'    ,price:1},
    {type:'salad'   ,price:0.35},
    {type:'cheese'  ,price:0.5},
    {type:'bacon'   ,price:0.9}
];

class BurgerBulider extends Component {
    state = {
        Ingreadients: [
            {amount:0, type:"salad",    addBtnDisabled:false, removeBtnDisabled:true},
            {amount:0, type:"bacon",    addBtnDisabled:false, removeBtnDisabled:true},      
            {amount:0, type:"cheese",   addBtnDisabled:false, removeBtnDisabled:true},
            {amount:0, type:"meat",     addBtnDisabled:false, removeBtnDisabled:true},
        ],

        BurgerPrice:1,
        purchasing:false
    };

    orderBtnDisabled = true;

    ingrEdit = (ingrType, value) => {
        this.setState((prevState) => {

            let ingreadients = [...prevState.Ingreadients];
            let newBurgerPrice = prevState.BurgerPrice;

            for(let i=0; i<ingreadients.length; i++){
                if(ingreadients[i].type === ingrType){
                    if((value<0 && ingreadients[i].amount <=0) || (ingreadients[i].amount>=4 && value>0)){break;}

                    ingreadients[i].amount += value;

                    for(let i=0; i<INGREADIENTS_PRICES.length; i++){
                        if(INGREADIENTS_PRICES[i].type === ingrType){
                            newBurgerPrice += (value*INGREADIENTS_PRICES[i].price);
                            break;
                        }
                    }

                    if(ingreadients[i].amount >= 4){
                        ingreadients[i].addBtnDisabled = true;
                    
                    }else if(ingreadients[i].amount <= 0){
                        ingreadients[i].removeBtnDisabled = true;
                    
                    }else{
                        ingreadients[i].removeBtnDisabled = false;
                        ingreadients[i].addBtnDisabled = false;
                    }

                    break;
                }
            }

            return {
                Ingreadients:ingreadients,
                BurgerPrice:newBurgerPrice
            };
        });
    }

    orderHandler = () => {
        this.setState({
            purchasing:true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing:false
        });
    }

    checkoutHandlerfn = () => {
        alert("you've bought a tasty burgor");

    }

    render() {
        let msg=null;
        let dummySum=0;

        for(let i=0; i<this.state.Ingreadients.length; i++){
            dummySum += this.state.Ingreadients[i].amount;
            
            if(dummySum === 0 && i === 3){
                msg = <p className={classes.Msg}>Please add some ingreadients</p>
                this.orderBtnDisabled = true;
            
            }else if(!this.state.purchasing) {
                this.orderBtnDisabled = false;
            }else {
                this.orderBtnDisabled = true;
            }
        }

        let OrderSummeryClass = this.state.purchasing ? classes.ShownOrderSummery : classes.HiddenOrderSummery;

        return (
            <React.Fragment>
                <Modal 
                    backdropClicked={this.purchaseCancelHandler}
                    OrdSummClas={OrderSummeryClass}
                    showBackdrop={this.state.purchasing}>
                        <OrderSummery 
                            ingreadients={this.state.Ingreadients}
                            orderCancelHandler={this.purchaseCancelHandler}
                            checkoutHandler={this.checkoutHandlerfn}
                            price={this.state.BurgerPrice} />
                            
                </Modal>

                <div>
                    <Burger 
                        Ingreadients={this.state.Ingreadients} 
                        massage={msg} 
                        price={this.state.BurgerPrice} />
                </div>

                <BurgerIngreadientControls 
                    IngreadientEdit={this.ingrEdit} 
                    Ingrs={this.state.Ingreadients} 
                    order={this.orderHandler} 
                    OrderBtnDisab={this.orderBtnDisabled} 
                    btnsState={this.buttonsStates}  />

            </React.Fragment>
        );
    }
}

export default BurgerBulider;