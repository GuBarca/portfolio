import React, {Component} from "react";
import './Grid.css';

class GridContainer extends Component {
    render(){
        return(
            <div className="containers">
                {this.props.children}
                <div className="gap"></div>
                <div className="gap"></div>
            </div>
        );
    }
}

export default GridContainer;
    