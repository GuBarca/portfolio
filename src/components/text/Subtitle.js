import React, {Component} from "react";
import './Text.css';

class Subtitle extends Component {
    render(){
        return(
            <h3 align={this.props.align} className="Subtitle">{this.props.children}</h3>
        );
    }
}

export default Subtitle;