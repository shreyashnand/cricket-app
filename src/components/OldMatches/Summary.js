import React,{Component} from 'react';
import SummaryModal from '../OldMatches/SummaryModal';


class Summary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isView: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick() {
            this.setState(prevState => ({
            isView: !prevState.isView
            }));
        }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>
                {this.state.isView ? <b>Match Summary</b> : <div className="Sum"><SummaryModal /></div>   }
            </button>
                
            </div>
        )
    }
}

export default Summary

