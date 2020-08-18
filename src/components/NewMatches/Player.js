import React,{Component} from 'react';
import PlayerModal from '../NewMatches/PlayerModal';


class Player extends Component {
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
                {this.state.isView ? <b>Players Profile</b> : <div className="Play"><PlayerModal /></div>   }
            </button>
                
            </div>
        )
    }
}

export default Player

