import React, {Component} from 'react';
import '../../../css/MyImage.css'

class MyImage extends Component{
    render(){
        return(
            <div>
                <img className="profileimage" alt="" src={this.props.src}></img>
            </div>
        )
    }
}

export default MyImage