import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainPage from './components/main-component';
import './App.css';

const Monsters = (props) => {
	console.log(props);
	return (
	<div>
		<h1>In Monsters Page</h1>
		
	</div>)
};

const MonstersDetails = (props) => {
	console.log(props);
return (<div><h1>In Monsters Details Page : {props.match.params.monsterId}</h1>
<Link to='/monsters'>Go back to monsters</Link></div>
	)
};

class App extends Component {
	render() {
		
		return (
			
			<div className="App">
				<Switch>
					<Route exact path='/' component={MainPage}></Route>
					<Route exact  path='/monsters' component={Monsters}></Route>
					<Route  path='/monsters/:monsterId' component={MonstersDetails}></Route>
				</Switch>
				
			</div>
		);
	}
}

export default App;
