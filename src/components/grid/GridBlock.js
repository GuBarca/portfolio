import React, {Component} from "react";
import './Grid.css';

class GridBlock extends Component {
    render(){
        var style = {};
        if(this.props.backgroundImage){
            style.backgroundImage = 'url(' + this.props.backgroundImage + ')';
            style.backgroundPosition = "center";
            style.backgroundSize = "cover";
        }
        
        return(
            <div className="item">
                <div className="box" style={style}>
                    {this.props.children}
                </div>
            
            </div>
        );
    }
}

export default GridBlock;