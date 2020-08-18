import React,{Component} from 'react';
import Modal from '../NewMatches/Modal';

class View extends Component {
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
                {this.state.isView ? <b>View details</b> : <div className="View"><Modal /></div>   }
            </button>
                
            </div>
        )
    }
}

export default View

