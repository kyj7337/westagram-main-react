import React, {Component} from 'react';
import '../../../css/Count.css'

class Count extends Component{
    render(){
        return(
            <div className="count">
                <img src="https://scontent-gmp1-1.cdninstagram.com/vp/94404155f36a53f50c818df75d0720ff/5E1ED87A/t51.2885-19/s150x150/61698216_2319709744752614_7030227376055255040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com" alt="" className="myrepl"></img>
                <a href="/">{this.props.name}</a>님<a href="/">외 {this.props.peoplelike}명</a>이 좋아합니다.
            </div>
        )
    }
}

export default Count