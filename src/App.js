import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchMonster : ''
		}
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }))
	}

	handleChange =(e) => {
		this.setState({searchMonster : e.target.value});
	}

	render() {
		const { monsters, searchMonster} = this.state;
		const filteredMonsters = monsters.filter(
			monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Roledex</h1>
				<SearchBox placeholder ="search monsters" 
				handleChange ={this.handleChange}></SearchBox>
				<CardList monsters ={filteredMonsters}></CardList>
			</div>
		);
	}
}

export default App;
