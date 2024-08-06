import { useEffect, useState } from "react";
import "./App.scss";
import Loading from "./Loading.tsx";

function App() {
  const [quote, setQuote] = useState("Loading");
  const [author, setAuthor] = useState("Loading");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getQuote = () => {
    setIsLoading(true);
    try {
      fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.content);
          setAuthor(data.author);
          setIsLoading(false);
        });
    } catch (e: any) {
      setError(e);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return <h2 className="app__author">Something went wrong...</h2>;
  }

  return (
    <>
      <div className="app">
        <h1 className="app__title">Inspirational Quote Generator <br /> (with a Wikipedia link, too)</h1>
        <h1 className="app__quote">"{quote}"</h1>
        <h2 className="app__author">- {author}</h2>
        <button className="app__button" onClick={getQuote}>
          Generate Another Quote
        </button>
        <a className="app__wiki-link" href={`https://en.wikipedia.org/wiki/${author}`} target="_blank">
          Click here to learn more about this person!
        </a>
        <p className="app__api-txt">Created using <a href='https://github.com/lukePeavey/quotable'>Quotable API</a></p>
      </div>
    </>
  );
}

export default App;
