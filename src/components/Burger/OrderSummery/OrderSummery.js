import React from 'react';
import Button from "../../UI/Button/Button.js"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const OrderSummery = props => {

    let keyBase = "OrderSummeryIngr";

    let ingrsSummery = [...props.ingreadients].map((ingrObject,index) => (
        <li key={keyBase + index}>{capitalizeFirstLetter(ingrObject.type) + " : " + ingrObject.amount}</li>
    ));

    return ( 
        <React.Fragment>
        <h3>Your Order</h3>
        <p>a delicious burger with the ingreadients : </p>
        <ul>
            {ingrsSummery}
        </ul>
        <p><b>Total Price : ${parseFloat(props.price).toFixed(2)}</b></p>
        <p>Continue To Checkout ? </p>
        <Button btnclass={'Danger'} text="Cancel" clicked={props.orderCancelHandler} />
        <Button btnclass={'Success'} text="Continue to Checkout" clicked={props.checkoutHandler} />
        </React.Fragment>
    );
}
 
export default OrderSummery;