import React, {Component} from 'react';
import '../../../css/Repl.css'

class Repl extends Component{
    render(){
        return(
            <span>
                <span className="gray_space">댓글 {this.props.count}개 모두 보기</span><br></br>
            </span>
        )
    }
}

export default Repl