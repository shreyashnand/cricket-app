import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import NewMatches from '../src/components/NewMatches/NewMatches';
import OldMatches from '../src/components/OldMatches/OldMatches';
import CricketScore from '../src/components/CricketScore/CricketScore';
import MatchCalender from '../src/components/MatchCalender/MatchCalender';


function App() {
  return (
    <div className="App">
    <img src={require('./download.jfif')} className="Image" alt=""/>
    <Router>
    <div className="NavBar">
            <nav className="Main-nav">
            <div className="cri">Cricket App</div> 
            <NavLink exact  to="/" className="NavLink" activeClassName="active-link">New Matches</NavLink>
            <NavLink exact  to="/oldmatches" className="NavLink" activeClassName="active-link">Old Matches</NavLink>
            <NavLink exact  to="/cricketscore" className="NavLink" activeClassName="active-link">Live Score</NavLink>
            <NavLink exact  to="/matchcalender" className="NavLink" activeClassName="active-link">Match Calender</NavLink>
            </nav>
            <Route path="/" exact component={NewMatches} />
            <Route path="/oldmatches" component={OldMatches} />
            <Route path="/cricketscore" component={CricketScore} />
            <Route path="/matchcalender" component={MatchCalender} />
    </div>
    </Router>  
    </div>
  );
}

export default App;
