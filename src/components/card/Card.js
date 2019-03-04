import React, {Component} from "react";
import './Card.css';

class Card extends Component {
    render(){

        var classname = 'Card';
        if(this.props.position){
            classname += " " + this.props.position; 
        }
        
        return(
            <div className={classname}>{this.props.children}</div>
        );
    }
}

export default Card;