import "./App.css";
import { useEffect, useState, useDispatch } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import axios from "axios";
import { apiKey } from "./keys";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const getTopic = (term) => {
    setTopic(term);
  };
  //
  const [news, setNews] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${apiKey}
      `
      )
      .then((res) => {
        setNews(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [topic]);
  return (
    <div>
      <Header />
      <SearchBar getTopic={getTopic} />
      <Display news={news} loading={isLoading} />
    </div>
  );
}

export default App;
