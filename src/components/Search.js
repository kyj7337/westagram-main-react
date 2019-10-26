import React, {Component} from 'react';
import '../css/Search.css'

class Search extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="검색" className="search"></input>
            </div>
        )
    }
}

export default Search;