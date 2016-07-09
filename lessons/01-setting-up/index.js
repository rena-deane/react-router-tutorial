import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import routes from './modules/routes';

render(
	<Router routes={routes} history={browserHistory}/>, document.getElementById('app')
)
