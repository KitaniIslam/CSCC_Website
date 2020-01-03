import React from 'react';
import './App.css';
import {Layout} from 'antd';
import { BrowserRouter as RouterList, Switch, Route } from "react-router-dom";
import Router from "./Router";

export default function App() {
  return ( 
  <RouterList>
    <Switch>
      <Layout>
        {Router.map( (route,index) => {
          return(
            <Route exact path={route.path} component={route.component} key={index} />
          )
        })}
      </Layout>
    </Switch>
  </RouterList>
  ) ;
}
