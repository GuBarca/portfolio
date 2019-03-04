import React, {Component} from "react";
import './Column.css';

class Column extends Component {
    render(){
        return(
            <div className="Column">{this.props.children}</div>
        );
    }
}

export default Column;