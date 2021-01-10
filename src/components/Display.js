import React from "react";
import Loader from "react-loader-spinner";
import {
  Article,
  NewsPage,
  TitleDiv,
  Wrapper,
  ArticleTitle,
  ImageContainer,
  Image,
  ByLine,
  TopCard,
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
        <Loader
          style={{ margin: "4rem auto" }}
          type="TailSpin"
          color="#000"
          height={200}
          width={200}
          timeout={3000} //3 secs
        />
      ) : (
        <Wrapper>
          {props.news.map((article) => (
            <Article>
              <ImageContainer>
                {article.multimedia.map((img) =>
                  img.format.toLowerCase().includes("thumbnail") ? (
                    <>
                      <Image src={img.url} />
                      <ByLine>{article.byline}</ByLine>
                    </>
                  ) : null
                )}
              </ImageContainer>
              <ArticleTitle>{article.title} </ArticleTitle>
              <p
                style={{
                  marginTop: "-1rem",
                  fontStyle: "italic",
                  textTransform: "capitalize",
                }}
              >
                Section: {article.section}
              </p>
              <p>{article.abstract}</p>
              <p style={{ textTransform: "capitalize" }}>
                published on: {article.published_date}
              </p>
            </Article>
          ))}
        </Wrapper>
      )}
    </NewsPage>
  );
};

export default Display;
