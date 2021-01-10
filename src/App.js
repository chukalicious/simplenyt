import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import axios from "axios";
import { apiKey } from "./keys";

function App() {
  //get topic from user input on the SearchBar
  const [topic, setTopic] = useState("");
  console.log("topic in the App.js: ", topic);
  const getTopic = (term) => {
    setTopic(term);
  };
  //
  const [news, setNews] = useState([]);
  console.log(news);
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${apiKey}
      `
      )
      .then((res) => {
        console.log("res in the App", res.data);
        setNews(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);
  return (
    <div className="App">
      <Header />
      <SearchBar getTopic={getTopic} />
      <Display news={news} />
    </div>
  );
}

export default App;
