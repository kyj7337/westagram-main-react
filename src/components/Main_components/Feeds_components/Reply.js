import React, {Component} from 'react';

import '../../../css/Reply.css'

class Reply extends Component{
    render(){
        return(
            <div className="reply">
                <input onChange={this.props.content}
                type="text" className="reply_input" placeholder="댓글 달기..."/>
                
            </div>
        )
    }
}

export default Reply