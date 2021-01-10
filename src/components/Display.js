import React from "react";
import { Article, NewsPage, TitleDiv } from "../styles";

const Display = (props) => {
  console.log("props in the Display", props);
  return (
    <NewsPage>
      <TitleDiv>
        <h1>Top Stories</h1>
        <h2>from the NYT</h2>
      </TitleDiv>
      {props.loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {props.news.map((article) => (
            <Article key={article.url}>
              <h3>{article.title} </h3>
              <p>section: {article.section}</p>
              <p>{article.abstract}</p>
              <p>{article.byline}</p>
              {/* name to change format on date */}
              <p>published on: {article.published_date}</p>
            </Article>
          ))}
        </div>
      )}
    </NewsPage>
  );
};

export default Display;
