import React, { Component } from 'react';
import './Wrapper.css';

class Wrapper extends Component {
    render(){
        var classname ="wrapper";

        if(this.props.align){
            classname += " " + this.props.align;
        }

        return (
            <div className={classname}>{this.props.children}</div>
        );
    }
}

export default Wrapper;
