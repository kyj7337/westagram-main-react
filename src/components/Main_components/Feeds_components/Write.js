import React, {Component} from 'react';
import More from './More'
import Repl from './Repl'
import '../../../css/Write.css'



class Write extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'hargendaz_korea',
            comment:'위워크에서 진행한 아이유 사인회...',
            replcount:'212'

        }
    }
    render(){
        return(
             <div className="write">
                 <a href="/">{this.state.name}</a>{this.state.comment}
                 <More></More>
                 <Repl count={this.state.replcount}></Repl>
             </div>
        )
    }
}

export default Write