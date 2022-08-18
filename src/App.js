import "./App.css";
import {
  useEffect,
  useState,
  // useDispatch
} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import NameForm from "./components/NameForm";
import axios from "axios";
import { apiKey } from "./keys";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  console.log("App.js: name: ", name);
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
      <NameForm getName={setName} />
      <SearchBar getTopic={getTopic} />
      <Display news={news} loading={isLoading} userName={name} />
    </div>
  );
}

export default App;
