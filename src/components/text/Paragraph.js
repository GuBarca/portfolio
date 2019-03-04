import React, {Component} from "react";
import './Text.css';

class Paragraph extends Component {
    render(){
        var style = {};
        if(this.props.color){
            style.color = this.props.color
        }
        return(
            <p align={this.props.align} style={style} className="Paragraph">{this.props.children}</p>
        );
    }
}

export default Paragraph;