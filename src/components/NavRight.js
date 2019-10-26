import React, {Component} from 'react';
import '../css/NavRight.css'





class NavRight extends Component{
    render(){
        return(
            <div className="nav_right">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="" className="icon2" ></img>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="" className="icon3"></img>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="" className="icon4"></img>
            </div>
        )
    }
}

export default NavRight;