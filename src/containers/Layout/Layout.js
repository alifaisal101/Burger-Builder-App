import React, {Component} from 'react';
import classes from './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


class Layout extends Component {
    state = {
        isSideDrawerOpen:false,
    }

    openSideDrawerHandler = () => {
        this.setState({
            isSideDrawerOpen:true
        });
    }

    closeSideDrawer = () => {
        this.setState({
            isSideDrawerOpen : false
        });
    }

    render() {
        return (
        <React.Fragment>
            <SideDrawer sideDrawerOpen={this.state.isSideDrawerOpen} backdropClicked={this.closeSideDrawer} />

            <Toolbar menuOpen={this.openSideDrawerHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>

        </React.Fragment>
        )
    }
}

export default Layout;
