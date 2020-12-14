import React from "react";
import PropTypes from "prop-types";
import titleList from "../ArticlePart2/titleList";

const ArticleTitleList = (props) => {
  return (
    <li>
      <article>
        <div>
            <h3>{props.article.title}</h3>
            <titleList />

            
        </div>
      </article>
    </li>
  );
};

ArticleTitleList.propTypes = {
    article: PropTypes.object.isRequired,
};

export default ArticleTitleList;