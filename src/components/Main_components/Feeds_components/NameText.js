import React, {Component} from 'react';
import '../../../css/NameText.css'

class NameText extends Component{
    render(){
        return(
            <div id="text">
                <a href="/">{this.props.name}</a>
            </div>
        )
    }
}

export default NameText