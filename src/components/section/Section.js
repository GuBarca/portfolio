import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
    render(){

        var gradientProp = String(this.props.backgroundGradient);
        var gradientValues = gradientProp.split(",");
        
        var style = {};

        if(!this.props.height){
            style.minHeight = "100vh";
        }else{
            style.minHeight = this.props.height;
        }

        if(this.props.backgroundColor){
            style.backgroundColor = this.props.backgroundColor;
                
            
        }else if(this.props.backgroundGradient){
            style.backgroundImage = 'linear-gradient('+ gradientValues[0] + ', ' + gradientValues[1] + ', ' + gradientValues[2] + ')';
            
        }
        return <div className="Section" style={style}>{this.props.children}</div>;
    }
}

export default Section;
