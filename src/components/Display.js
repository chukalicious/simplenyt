import React from "react";
import {
  Article,
  NewsPage,
  TitleDiv,
  Wrapper,
  ArticleTitle,
  ImageContainer,
} from "../styles";

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
        <Wrapper>
          {props.news.map((article) => (
            <Article>
              <ImageContainer>
                {article.multimedia.map((img) =>
                  img.format.toLowerCase().includes("thumbnail") ? (
                    <img src={img.url} />
                  ) : null
                )}
              </ImageContainer>
              <ArticleTitle>{article.title} </ArticleTitle>
              <p>section: {article.section}</p>
              <p>{article.abstract}</p>
              <p>{article.byline}</p>
              <p>published on: {article.published_date}</p>
            </Article>
          ))}
        </Wrapper>
      )}
    </NewsPage>
  );
};

export default Display;
