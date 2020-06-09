import React from 'react'; 
import { Route,BrowserRouter, Switch } from 'react-router-dom'; 

import Home from './pages/Home'; 
import CreatePoint from './pages/CreatePoint'; 

const routes = () => {
    return (
        
        <BrowserRouter>
            <Route exact component={Home} path="/" />
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>

    ); 
}

export default routes; 