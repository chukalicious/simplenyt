import styled from "styled-components";

export const NewsPage = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
`;
export const TitleDiv = styled.div`
  width: 100%;
  text-align: center;
`;
export const Article = styled.div`
  display: flex;
  width: 20%;
  border: solid lightgray 0.2px;
  margin: 1rem;
  padding: 1rem;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ImageContainer = styled.div`
  display flex; 
`;
export const Image = styled.img`
  width: 50%;
`;
export const ByLine = styled.p`
  text-align: right;
  font-weight: bold;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
`;
export const ArticleTitle = styled.h3`
  text-align: left;
`;
