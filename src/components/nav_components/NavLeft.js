import React, {Component} from 'react';
import '../../css/NavLeft.css'
import Bar from './Bar';
import Icon1 from './Icon1';
import Logo from './Logo';




class NavLeft extends Component{
    render(){
        return(
            <div className="nav_left">
                <div className="nav">
                     <Icon1></Icon1>
                     <Bar></Bar>
                     <Logo></Logo>
                </div>
            </div>
        )
    }
}

export default NavLeft;