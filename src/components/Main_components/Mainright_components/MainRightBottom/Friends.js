import React, {Component} from 'react';
import './Friends.css'

class Friends extends Component{
    render(){
        return(
            <div className="up">
                <img src={this.props.src} alt="" className="recommand"/>
                <div className="friendsprofilesay">
                <a href="/">{this.props.name}</a><br></br>
                <span className="recommandtime">{this.props.foruser}</span>
                <span className="follow">팔로우</span>
                </div>
            </div>
        )
    }
}
export default Friends