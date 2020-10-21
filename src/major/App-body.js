import React from 'react';

import Gallery from '../views/gallery/gallery.js'
import Navigation from '../views/navigation/navigation.js'
import Info from '../views/info/info.js'
import ArticleList from '../views/article/articlelist.js'

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
            <Route path="/d">
                <ArticleList></ArticleList>
            </Route>
        </Switch>	

	);
}
export default AppBody;
