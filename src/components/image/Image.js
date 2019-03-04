import React, {Component} from "react";
import './Image.css';

class Image extends Component {
    render(){
        var style = {};
        if(this.props.align === "center"){
            style.position = "relative";
            style.left = "50%";
            style.transform = "translateX(-50%)";
        }
        if(this.props.float === "bottom"){
            style.position = "absolute";
            style.bottom = "0";
        }
        return(
            <img src={this.props.path} width={this.props.width} style={style}></img>
        );
    }
}

export default Image;