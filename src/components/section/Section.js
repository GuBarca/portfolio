import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
    render(){
        if(this.props.background){
            var style = {
                backgroundColor: this.props.background
            }
           
        }
        return <div className="Section" style={style}></div>;
    }
}

export default Section;
