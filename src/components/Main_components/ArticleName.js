import React, {Component} from 'react';
import Hargendaz from './Feeds_components/Hargendaz';
import NameText from './Feeds_components/NameText';
import Dot from './Feeds_components/Dot'
import '../../css/ArticleName.css'

class ArticleName extends Component{
    constructor(){
        super()
        this.state={
            ownname:'hargendaz_korea',
            ownname2:'limsphered'
        }
    }
    render(){
        return(
         <div className="article_name">
             <Hargendaz></Hargendaz>
             <NameText name={this.state.ownname}></NameText>
             <Dot></Dot>
         </div>
        )
    }
}

export default ArticleName