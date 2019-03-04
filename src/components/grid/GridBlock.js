import React, {Component} from "react";
import './Grid.css';

class GridBlock extends Component {

    constructor(props){
        super();
        
        this.state = {
            text_visibility: "0",
            background: 'url(' + props.backgroundImage + ')'
        };
    }
    
    hover(props){
       this.setState({
            text_visibility: "1",
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(' + this.props.backgroundImage + ')'
        });
        
    }

    leave(props){
        this.setState({
            text_visibility: "0",
            background: 'url(' + this.props.backgroundImage + ')'
        });
    }

    redirect(){
        window.location = this.props.Link;
    }

    render(){
        var style = {};
        if(this.props.backgroundImage){
            style.backgroundImage = this.state.background;
            style.backgroundPosition = "center";
            style.backgroundSize = "cover";
        }
        var text_content = {}
        if(this.props.previewText){
            text_content.opacity = this.state.text_visibility;
        }
        
        return(

            <div className="item">
                <div className="box" onClick={this.redirect.bind(this)} onMouseEnter={this.hover.bind(this)} onMouseLeave={this.leave.bind(this)} style={style}>
                <div className="preview-text" style={text_content}>
                    {this.props.previewText}
                </div>
                    
                </div>
            </div>
        );
    }
}

export default GridBlock;