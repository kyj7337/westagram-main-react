import React, {Component} from 'react';
import Example from'./Example'
import './Replwork.css'

class Replwork extends Component{
    constructor(){
        super()
        this.state={
            username:'kim.young._.jun',
            usercomment:'댓글좀달려라 ',
        }
    }
    // Submitbutton=(e)=>{
    //     e.preventDefault();
    //     alert('hi')
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleCreate(this.props.replcontents); //상태초기화시켜줌
    }
    Ex =(e)=>{
        // eslint-disable-next-line no-lone-blocks
        {this.props.comments.map(el=>{
            return <li>{el.text}</li>
        })}
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <a href="/"> {this.state.username}</a>
                <span id="repl">{this.state.usercomment}</span>
                {/* {this.props.contents.map((el, index)=>{
                    <Example
                        contents={el}
                        key = {index}
                    />
                })} */}
                {this.props.comments.map(el=>{
                    return<example>  
                            {el.text}<br></br>
                          </example>
                })}
                
                <img className="hearticon" alt="" 
                src={require('../Main_components/Feeds_components/repl_heart.png')}/>
                
                    <div className="reply">
                        <input 
                        onChange={this.props.ReplWindow}
                        value={this.props.replcontents}
                        type="text" 
                        className="reply_input" 
                        placeholder="댓글 달기..."
                        />

                        <button 
                        class="post" 
                        type="submit" 
                        onClick={this.props.handleCreate}>
                          게시
                        </button>

                    </div>
                        
            </form>
        )
    }
}

export default Replwork