import React, {Component} from 'react';
import './Story2.css'
import Friends from './Friends'

class Story2 extends Component{
    constructor(){
        super()
        this.state={
            src1:'https://scontent-gmp1-1.cdninstagram.com/vp/e6f36c29d567029c936788318c564c35/5E264990/t51.2885-19/s150x150/53836934_1072542666257969_2957178755316973568_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com',
            src2:'https://scontent-gmp1-1.cdninstagram.com/vp/fdd3622f7b8dd59ea0818be02eee07a7/5E1A4E70/t51.2885-19/s150x150/69694071_528859071203939_3874243720001880064_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com',
            src3:'https://scontent-gmp1-1.cdninstagram.com/vp/777de14a88e60c83f3b504b2fa4696ba/5E2B7EA6/t51.2885-19/s150x150/69642443_981753855499110_7572390611181895680_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com',
            name1:'empoapp',
            name2:'songda_cat',
            name3:'aineworld',
            foruser1:'회원님을 위한 추천',
            foruser2:'회원님을 팔로우합니다'
        }
    }
    render(){
        return(
            <div className="story3">
                <Friends src={this.state.src1} name={this.state.name1} foruser={this.state.foruser1}></Friends>
                <Friends src={this.state.src2} name={this.state.name2} foruser={this.state.foruser2}></Friends>
                <Friends src={this.state.src3} name={this.state.name3} foruser={this.state.foruser1}></Friends>
            </div>
        )
    }
}
export default Story2