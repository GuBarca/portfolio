import React, {Component} from "react";
import './Text.css';

class RegularText extends Component {
    render(){
        var style = {};
        if(this.props.color){
            style.color = this.props.color
        }
        return(
            <h2 align={this.props.align} style={style} className="RegularText">{this.props.children}</h2>
        );
    }
}

export default RegularText;