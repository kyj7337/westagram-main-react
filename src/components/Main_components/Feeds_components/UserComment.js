import React, {Component} from 'react';
import '../../../css/UserComment.css'

class UserComment extends Component{
    constructor(){
        super()
        this.state={
            username:'kim.young._.jun',
            usercomment:'이선 넘으면 정색이야 삡~~'
        }
    }
    render(){
        return(
            <span>
                <a href="/">{this.state.username}</a>
                <span id="repl">{this.state.usercomment}</span>
                <img className="hearticon" alt="" src={require('./repl_heart.png')}></img>
            </span>
        )
    }
}

export default UserComment