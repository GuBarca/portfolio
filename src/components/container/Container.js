import React, {Component} from "react";
import './Container.css';

class Container extends Component {
    render(){
        var style = {};
        var classname = "Container";
        if(this.props.padding){
            style.padding = this.props.padding;
        }
        
        if(this.props.positionY){
            classname += " y" + this.props.positionY;
        }                               

        return(
            <div className={classname} style={style}>{this.props.children}</div>
        );
    }
}

export default Container;