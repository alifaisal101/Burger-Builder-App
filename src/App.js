import React, { Component } from 'react';
import classes from "./App.css";

import Layout from "./containers/Layout/Layout";
import BurgerBulider from "./containers/BurgerBulider/BurgerBulider.js";

class App extends Component {
render () {
    return (
        <div className={classes.app}>
           <Layout>
               <BurgerBulider />
           </Layout>
        </div>
    );
}
}

export default App;