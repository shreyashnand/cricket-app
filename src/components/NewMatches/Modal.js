import React, { Component } from 'react';
import './Modal.css'

class modal extends Component {
    render() {
        return (
            <div className="Modal">
            <div className="Display">
            <div><b>Team 1</b></div>
            <div><b>Team 2</b></div>
            <div>
            <p className="bac">Sachin</p>
            <p className="bac">Dravid</p>
            <p className="bac">Gavaskar</p>
            <p className="bac">Dhoni*(WK)(C</p>
            <p className="bac">Kohli</p>
            <p className="bac">Raina</p>
            <p className="bac">Kumble</p>
            <p className="bac">Zaheer</p>
            <p className="bac">Sehwag</p>
            <p className="bac">Harbhajan</p>
            <p className="bac">Jadeja</p>
            </div>
            <div>
            <p className="bac">Pointing*(C)</p>
            <p className="bac">Gilchrist(WK)</p>
            <p className="bac">Johnson</p>
            <p className="bac">Bret lee</p>
            <p className="bac">Hayden</p>
            <p className="bac">Smith</p>
            <p className="bac">Warne</p>
            <p className="bac">Michelle</p>
            <p className="bac">Gillespe</p>
            <p className="bac">Maxwell</p>
            <p className="bac">Gilbert</p>
            </div>
            
            </div>
            <button>Close</button>
             
            


            </div>
        )
    }
}

export default modal
