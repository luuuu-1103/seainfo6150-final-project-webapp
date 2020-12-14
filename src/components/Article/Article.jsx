import React from 'react';
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./Article.module.css";


const Article = (props) => {
    let displayContent;
  

        displayContent = (
            <ul>
                {props.articles.map((article) => (
                    <ArticleListItem article={article} key={article.slug} />
                ))}
            </ul>
        );
  
    return (
        

        <div>
            <h2 className={styles.articleH}>Articles -- Part 1</h2>
            
            {displayContent}
        </div>
    );
}

Article.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Article;
