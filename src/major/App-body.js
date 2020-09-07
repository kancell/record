import React from 'react';

import Gallery from '../views/gallery/gallery.js'
import Navigation from '../views/navigation/navigation.js'
import Info from '../views/info/info.js'

import {
	Switch,
    Route,
    useLocation
  } from "react-router-dom";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function AppBody() {
    let query = useQuery();
	return (
        <Switch>
            <Route exact path="/">
                <Navigation duration={1000} timing={'ease'}></Navigation>
            </Route>
            <Route path="/b">
                <Gallery name={query.get("name")}></Gallery>
            </Route>
            <Route path="/c">
                <Info></Info>
            </Route>
        </Switch>	

	);
}
export default AppBody;
