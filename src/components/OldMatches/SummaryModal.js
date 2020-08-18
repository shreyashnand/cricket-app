import React,{Component} from 'react';
import './SummaryModal.css';
import {SummaryData} from '../OldMatches/SummaryData';

class SummaryModal extends Component {
    
    render() {
        return (
            <div className="SummMode">
            <div>
            {SummaryData.map(data =>(
                <div key={data.id}>
                <div className="sumdetail"> 
                <div className="head"> <b>{data.team1}:</b>  {data.t1} </div>
                <div className="head"> <b>{data.team2}: </b>  {data.t2}</div> 
                <div className="head"> <b>Bowler of the Match :</b>  {data.bom} {data.fig}</div> 
                <div className="head"> <b>Man of The Match: </b> {data.mom} 120(105)</div> 
                <div className="head"> <b>Best Fielder:</b>  {data.bf}</div> 
                <div className="head"><b>Winner:</b>  {data.team1} </div> 
                <div className="head"> <b>Looser: </b> {data.team2} </div> 
                <div className="head"> <b>{data.team1}: </b> {data.t1players} </div> 
                <div className="head"> <b>{data.team2}: </b> {data.t2players} </div> 
                

                </div>
                
                
                </div>
            ))}
            </div>
            <button>Close</button>
                
            </div>
        )
    }
}

export default SummaryModal

