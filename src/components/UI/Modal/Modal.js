import React, {Component} from 'react';
import  classes  from "./Modal.css";
import Backdrop from "./../Backdrop/Backdrop.js";

class Modal extends Component {
    shouldComponentUpdate(nextProps){
        return nextProps.showBackdrop !== this.props.showBackdrop;
    }

    render () {
        return (
            <React.Fragment>
            <Backdrop show={this.props.showBackdrop} clicked={this.props.backdropClicked} />
            <div className={classes.Modal + ' ' + this.props.OrdSummClas}>
                {this.props.children}
            </div>
            </React.Fragment>
        )
    };
}
export default Modal;