import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowsHome from './Components/showsComponents/ShowsHome';
import ShowsInfo from './Components/showsComponents/ShowsInfo';

const Home = props => (
    <Switch>
        <Route exact path="/" component={ShowsHome}/>
        <Route path="/showsinfo/:id" component={ShowsInfo}/>
    </Switch>
);

export default Home;