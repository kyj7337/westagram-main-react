import React, {Component} from 'react';
import './Replwork.css'

class Example extends Component{
    
    render(){
        return(
            <span id="repl">  
                <br></br>
                <a href="/">1</a>
                <span id="repl">{this.props.Ex}</span>
            </span>
        )
    }
}

export default Example