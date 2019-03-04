import React, {Component} from "react";
import './Text.css';

class Paragraph extends Component {
    render(){
        var style = {};
        if(this.props.color){
            style.color = this.props.color
        }

        var classname = "Paragraph";
        if(this.props.position){    
            classname += " " + this.props.position;
            
        }
        return(
            <p align={this.props.align} style={style} className={classname}>{this.props.children}</p>
        );
    }
}

export default Paragraph;