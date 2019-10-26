import React, {Component} from 'react';
import '../../css/Feeds.css'
import ArticleName from './ArticleName';
import MainImage from '../Main_components/MainImage'
import ArticleUnderIcon from '../Main_components/Feeds_components/ArticleUnderIcon'
import Count from '../Main_components/Feeds_components/Count'
import Write from './Feeds_components/Write'
import Replwork from './Replwork'

class Feeds extends Component{
    constructor(props){
        super(props)
        this.state={
            name: 'kim.young._.jun',
            peoplelike:'20',
            replcontents:'',
            comments:[{
                name:'please',
                text:'Hi'
            }]
           
        }
    }
        ReplWindow=(e)=>{//input 창에 댓글이 쓰여지는 곳
            this.setState({replcontents:e.target.value})
             
        }
        
        handleCreate = (e) =>{
            let content = this.state.replcontents
            
            this.state.comments.push({name:'hold', text:content})
            this.setState({replcontents:'', comments:this.state.comments})
            console.log(this.state.comments)
        }
        // this.setState({replcontents:'', comments:this.state.comments}) 얘를 map 함수 돌린다.

        


        Ex = (e)=>{
            // eslint-disable-next-line no-lone-blocks
            {this.state.comments.map(el=>{
                return <li>{el.text}</li>
            })}

        }


    render(){
        // const names=['눈사람','얼음','눈']
        // const OO = names.map(el=>{
        //     return <li>{el.text}</li>;
        // })
        return(
            
            <div className="div_feeds">
                <ArticleName></ArticleName>
                <MainImage></MainImage>
                <ArticleUnderIcon></ArticleUnderIcon>
                <Count name={this.state.name} peoplelike={this.state.peoplelike}></Count>
                <Write></Write>
                {/* 이 밑은 댓글작업공간 */}
                <Replwork 
                ReplWindow={this.ReplWindow}
                replcontents={this.state.replcontents}
                handleCreate={this.handleCreate}
                comments={this.state.comments}
                
                /> 
                {this.Ex}
                
                
                
            </div>
        )
    }
}

export default Feeds