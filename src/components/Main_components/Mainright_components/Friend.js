import React, {Component} from 'react';
import '../../../css/Friend.css'

class Friend extends Component{
    render(){
        return(
            <div>
                <img src={this.props.src} alt="" className="friendsprofile"></img>
                <div className="friendsprofilesay">
                    <a href="/">{this.props.name}</a><br></br>
                    <span className="friendstime">{this.props.time}시간 전</span>
                </div>
            </div>
        )
    }
}

export default Friend