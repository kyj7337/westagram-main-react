import React, {Component} from 'react';
import '../../css/Logo.css'

class Logo extends Component{
    render(){
        return(
            <div> 
              <img className="logo" src={require('./logo_text.png')} alt="">
              </img>
            </div>
        )
    }
}

export default Logo;