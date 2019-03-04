import React, { Component } from 'react';
import './Button.css';

class CircularButtonImage extends Component {
    render(){
        var style = {};
        if(this.props.size){
            style.width = this.props.size;
            style.height = this.props.size;
        }

        if(this.props.color){
            style.borderColor = this.props.color;
        }

        if(this.props.backgroundImage){
            style.backgroundImage = 'url(' + this.props.backgroundImage + ')';
        }

        if(this.props.margin){
            style.margin = this.props.margin;
        }

        return (
            <button style={style} className="circular-button-image"/>
        );
    }
}

export default CircularButtonImage;
