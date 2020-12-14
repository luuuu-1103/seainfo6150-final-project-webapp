import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css";
  
  const ArticleListItem = (props) => {
    
  return (
    
      <article>
        <div>
            <ul>
               <h2 className={styles.articleHeading}>{props.article.title}</h2>
           
               <p className={styles.articleBody}>{props.article.shortText}</p>
              
              
            </ul>
            
        </div>
      </article>
    
  );
};

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired,
};

export default ArticleListItem;