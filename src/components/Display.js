import React from "react";

const Display = (props) => {
  console.log("props in the Display", props);
  return (
    <div>
      <h1>Display</h1>

      {props.news.map((article) => (
        <div key={article.url}>
          <h5>{article.title} </h5>
          <p>section: {article.section}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
