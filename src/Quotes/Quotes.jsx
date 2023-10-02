import React, { useEffect, useState } from "react";
import { QuotesText } from "../Components/QuotesText";
import { QuotesAuthor } from "../Components/QuotesAuthor";
import "./Quotes.css";
import { Button } from "../Components/Button";
import axios from "axios";

export const Quotes = () => {
  const [state, setState] = useState({
    quote: "The best richness is the richness of soul",
    author: "Prophet Muhammad (Peace Be Up On Him)",
    quoteData: [],
    color: "rgb(243, 156, 18)",
  });

  const randomColor = () => {
    let colorPatterns = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += color + colorPatterns(Math.floor(Math.random() * 16));
    }
    return color;
  };

  const fetchQuotes = () => {
    axios
      .get(
        "https/gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const quotesData = [...res.data.quotes];
        const color = randomColor();
        document.body.style = color;
        document.body.style.backgroundColor = color;

        setState({
          quoteData: quotesData,
          color: color,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (state.quoteData.length > 0) {
      return;
    } else {
      fetchQuotes();
    }
  });

  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * 16);
    let { quote, author } = state.quoteData[randomIndex];

    const color = randomColor();
    document.body.style = color;
    document.body.style.backgroundColor = color;

    setState({
      quote: quote,
      author: author,
      color: color,
    });
  };
  return (
    <div id="quote-box">
      <QuotesText quote={state.quote} color={state.color} />
      <QuotesAuthor author={state.author} color={state.color} />
      <Button />
    </div>
  );
};
