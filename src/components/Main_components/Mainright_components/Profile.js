import React, {Component} from 'react';
import MyImage from './MyImage';
import MyProfile from './MyProfile';

class Profile extends Component{
    constructor(){
        super()
        this.state={
            name:'kim_young._.jun',
            koreaname:'김영준',
            src:"https://scontent-gmp1-1.cdninstagram.com/vp/94404155f36a53f50c818df75d0720ff/5E1ED87A/t51.2885-19/s150x150/61698216_2319709744752614_7030227376055255040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com",
            profilename:'kim_young._.jun',
            profilenamekorean:'김영준'
        }
    }
    render(){
        return(
            <div className="profile">
                <MyImage src={this.state.src}></MyImage>
                <MyProfile profilename={this.state.profilename} profilenamekorean={this.state.profilenamekorean}></MyProfile>
            </div>
        )
    }
}

export default Profile
