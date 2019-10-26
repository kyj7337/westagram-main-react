import React, {Component} from 'react';
import '../../../css/Story.css'
import Friend from './Friend'

class Story extends Component{
    constructor(){
        super()
        this.state={
            friend1:'https://scontent-gmp1-1.cdninstagram.com/vp/8878bc785404c8ea46d74c97f236f02f/5E23446D/t51.2885-19/s150x150/69078334_446548686203385_8185577834991845376_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com',
            friend2:'https://scontent-gmp1-1.cdninstagram.com/vp/fad75dd14c3f9f1cad85e7efdf30180c/5E383227/t51.2885-19/s150x150/42003894_547645315689770_6330468283166228480_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com',
            friend3:'https://lordmyshepherd.github.io/cross.png',
            friend4:'https://scontent-gmp1-1.cdninstagram.com/vp/517c2c0e64bec5f6b7e8081e724d87bd/5E31EC53/t51.2885-19/s150x150/67381641_525006774908429_492098832876699648_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com',
            friendname1:'rampart81',
            friendname2:'jiiinyong_1012',
            friendname3:'yoobyeong_min',
            friendname4:'s__yoonji',
            time1:'21',
            time2:'13',
            time3:'2',
            time4:'1'

        }
    }
    render(){
        return(
            <div className="story2">
                <Friend src={this.state.friend1} name={this.state.friendname1} time={this.state.time1}></Friend>
                <Friend src={this.state.friend2} name={this.state.friendname2} time={this.state.time2}></Friend>
                <Friend src={this.state.friend3} name={this.state.friendname3} time={this.state.time3}></Friend>
                <Friend src={this.state.friend4} name={this.state.friendname4} time={this.state.time4}></Friend>
            </div>
        )
    }
}

export default Story