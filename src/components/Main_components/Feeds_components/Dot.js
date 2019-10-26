import React, {Component} from 'react';
import '../../../css/Dot.css'

class Dot extends Component{
    render(){
        return(
            <span>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="" className="dot"></img>
            </span>
        )
    }
}

export default Dot