import React,{Component} from 'react';
import './PlayerModal.css';
import {PlayerData} from '../NewMatches/PlayerData';

class PlayerModal extends Component {
    
    render() {
        return (
            <div className="Mode">
            <div>
            {PlayerData.map(data =>(
                <div key={data.id} className="playerData">
                <div> 
                <img src={data.avatar_url} className="playerImg" alt="images" /> 
                <div>{data.name}</div>
                <div>Matches: {data.Matches} </div>
                <div>100s: {data.Centuries}</div> 
                <div>50: {data.HalfCent}</div> 
                <div>Average: {data.Average}</div> 
                </div>
                
                
                </div>
            ))}
            </div>
            <button>Close</button>
                
            </div>
        )
    }
}

export default PlayerModal

