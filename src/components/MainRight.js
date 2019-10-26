import React, {Component} from 'react';
import '../css/MainRight.css'
import Profile from './Main_components/Mainright_components/Profile'
import MainRightTop from './Main_components/Mainright_components/MainRightTop'
import Story from './Main_components/Mainright_components/Story'
import Recommendforuser from './Main_components/Mainright_components/Recommendforuser';
import Story2 from '../components/Main_components/Mainright_components/MainRightBottom/Story2'
import Information from '../components/Main_components/Mainright_components/MainRightBottom/Information/Information'

class MainRight extends Component{
    constructor(){
        super();
        this.state={
            
        }
    }
    render(){
        return(
            <div className="main_right">
                <Profile></Profile>
                <div className="main_right_top">
                    <MainRightTop></MainRightTop>
                    <Story></Story>
                </div>
                <div className="main_right_bottom">
                    <Recommendforuser></Recommendforuser>
                    <Story2></Story2>
                </div>
                    <Information></Information>
            </div>
        )
    }
}

export default MainRight