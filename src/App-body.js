import React from 'react';
import './App.css';


import Gallery from './component/gallery/gallery.js'
import Navigation from './component/navigation/navigation.js'

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
                <Navigation></Navigation>
            </Route>
            <Route path="/b">
                <Gallery name={query.get("name")}></Gallery>
            </Route>
        </Switch>	

	);
}
export default AppBody;
