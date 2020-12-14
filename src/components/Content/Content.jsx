import React from 'react';
import PropTypes from "prop-types";
import ArticleTitleList from "../ArticleTitleList/ArticleTitleList";


const Content = (props) => {
    let displayContent;
    if (props.articles.length) {
        
        displayContent = (
            <ul>
                {props.articles.map((article) => (
                    <ArticleTitleList article={article} key={article.slug} />
                ))}
            </ul>
        );
    } else {
        displayContent = <div>please wait a moment</div>;
    }

    return (
        <div>
            {displayContent}
            
        </div>
    );
}

Content.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Content;
