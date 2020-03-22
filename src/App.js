import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/login';
import { createContext } from 'react';
import { AuthContextProvider } from './components/Login/useauth';
import Shipment from './components/Shipment/Shipment';

export const userContext = createContext();

function App() {
  const user = {name: 'Mahmud', email: 'yoobaby@gllgl.com'}
  return (
    <div >
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>

            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            
            <Route path="/shipment">
              <Shipment></Shipment>
            </Route>

            <Route path="*"> 
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      
        </AuthContextProvider>
    </div>
  );
}

export default App;
