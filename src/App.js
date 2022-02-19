import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => {
	return (
		<div>
			<h1>Hats</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				// Router v6
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
