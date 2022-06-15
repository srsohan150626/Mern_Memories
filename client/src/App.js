import React from 'react';
import {Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Auth from "./components/Auth/Auth";

const App = () => {
    return (
       <BrowserRouter>
           <Container maxWidth="lg">
               <Navbar/>
               <Switch>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/auth" exact component={Auth}></Route>
               </Switch>
           </Container>
       </BrowserRouter>
    );
}

export default App;