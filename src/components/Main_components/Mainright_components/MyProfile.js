import React, {Component} from 'react';
import '../../../css/MyProfile.css'

class MyProfile extends Component{
    render(){
        return(
            <div className="profilesay">
                <a href="/" alt="">{this.props.profilename}</a><br></br>
                <span className="myname">{this.props.profilenamekorean}</span>
            </div>
        )
    }
}
export default MyProfile