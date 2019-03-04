import React, {Component} from "react";
import './Text.css';

class MediumText extends Component {
    render(){
        var style = {};
        if(this.props.color){
            style.color = this.props.color
        }
        return(
            <h1 align={this.props.align} style={style} className="MediumText">{this.props.children}</h1>
        );
    }
}

export default MediumText;