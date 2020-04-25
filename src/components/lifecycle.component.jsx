import React from 'react';

export class LifeCycle extends React.Component {
    constructor(){
        super();
        console.log("Constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",nextProps);
        return true;
    }

    render(){
        return (
            <div className="lifecycles">
                <h3>Lifecycles Component</h3>
                {this.props.text}
            </div>
        );
    }
}