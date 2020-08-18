import React,{Component} from 'react';
import TableModal from '../MatchCalender/TableModal';


class Table extends Component {
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
                {this.state.isView ? <b>Tournament Table</b> : <div ><TableModal /></div>   }
            </button>
                
            </div>
        )
    }
}

export default Table

