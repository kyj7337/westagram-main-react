import React, {Component} from 'react';
import '../../../css/Post.css'

class Post extends Component{
    render(){
        return(
            <span>
                <button class="post" type="submit" onClick={function(e){
                    
                }.bind(this)}>게시</button>
            </span>
        )
    }
}
export default Post