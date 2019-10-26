import React, {Component} from 'react';
import '../css/NavWrapper.css'
import Navleft from './nav_components/NavLeft';
import Search from './Search'
import NavRight from './NavRight'


class NavWrapper extends Component{
    render(){
        return(
            <div className="nav_wrapper"> 
                <Navleft></Navleft>
                <Search></Search>
                <NavRight></NavRight>
            </div>
        )
    }
}

export default NavWrapper;