import React  from 'react';
import { CardList } from './card-list/card-list.component';
import { SearchBox } from './search-box/search-box.component';
import { LifeCycle } from "./lifecycle.component";
import '../App.css';

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchMonster : '',
			IncerementValue :1+this.props.increment,
			showChild : false,
			text:""
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

	changeValue =() =>{
		this.setState((prevState,prevProps)=> {
			return {IncerementValue : prevState.IncerementValue+prevProps.increment}},
			()=>console.log(this.state.IncerementValue)
		);
	}

	render() {
		const { monsters, searchMonster} = this.state;
		const filteredMonsters = monsters.filter(
			monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Roledex</h1>
				<p>{this.state.IncerementValue}</p>
				<button onClick={this.changeValue}>IncerementValue</button><br></br>
				<button onClick={()=>(this.setState(state =>({showChild : !state.showChild})) )}>LifeCycleToggles</button>
				<button onClick={()=>(this.setState(state =>({text : state.text+"_helo"})))}>UpdateText</button><br></br>
				{this.state.showChild ? <LifeCycle text={this.state.text} ></LifeCycle> :null}
				
				<SearchBox placeholder ="search monsters" handleChange ={this.handleChange}></SearchBox>
				<CardList monsters ={filteredMonsters}></CardList>
			</div>
		);
	}
}

export default MainPage;
