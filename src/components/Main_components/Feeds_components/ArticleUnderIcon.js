import React, {Component} from 'react';
import ArticleUnderIcons from '../../Main_components/Feeds_components/ArticleUnderIcons'
import '../../../css/ArticleUnderIcon.css'
import '../../Main_components/Feeds_components/ArticleUnderIcons'
import ArticleUnderIcons2 from './ArticleUnderIcons2';
import ArticleUnderIcons3 from './ArticleUnderIcons3';
import ArticleUnderIcons4 from './ArticleUnderIcons4';

class ArticleUnderIcon extends Component{
    render(){
        return(
            <div className="article_under">
                <ArticleUnderIcons></ArticleUnderIcons>
                <ArticleUnderIcons2></ArticleUnderIcons2>
                <ArticleUnderIcons3></ArticleUnderIcons3>
                <ArticleUnderIcons4></ArticleUnderIcons4>
            </div>
        )
    }
}

export default ArticleUnderIcon;