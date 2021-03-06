import React from 'react';

import Gallery from '../views/gallery/gallery.js'
import Navigation from '../views/navigation/navigation.js'
import Info from '../views/info/info.js'
import ArticleList from '../views/article/article.js'
import ArticleContent from '../views/article/content.js'
import FormTest from '../views/formTest/form-test.js'

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
            <Route path={`/e/:id`} >
                <ArticleContent></ArticleContent>
            </Route>
            <Route path="/f">
                <FormTest></FormTest>
            </Route>
        </Switch>	

	);
}
export default AppBody;
