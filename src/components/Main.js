import React, {Component} from 'react';
import '../css/Main.css'
import Feeds from './Main_components/Feeds'
import MainRight from './MainRight'

class Main extends Component{
    render(){
        return(
            <div className="main">
                <Feeds></Feeds>
                <MainRight></MainRight>
            </div>
        )
    }
}

export default Main