import React, {Component} from "react";
import './Text.css';

class BigText extends Component {
    render(){
        var style = {};
        if(this.props.color){
            style.color = this.props.color
        }

        return(
            <h1 align={this.props.align} style={style} className="BigText">{this.props.children}</h1>
        );
    }
}

export default BigText;