import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return (
        
        <div className="card-list">
            {props.monsters.map(monster =>(
                //to='/monsters/:monster.id'
                <Link to={`/monsters/:${monster.id}`}><Card key={monster.id} monster={monster}></Card></Link>
            ))}
        </div>
        
    );
    
};