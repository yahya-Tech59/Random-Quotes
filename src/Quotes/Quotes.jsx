import React, { useState } from "react";
import { QuotesText } from "../Components/QuotesText";
import { QuotesAuthor } from "../Components/QuotesAuthor";

export const Quotes = () => {
  const [state, setState] = useState({
    quote: "The best richness is the richness of soul",
    author: "Prophet Muhammad (Peace Be Up On Him)",
    quoteData: [],
    color: "rgb(243, 156, 18)",
  });
  return (
    <div id="quote-box">
      <QuotesText quote={state.quote} color={state.color} />
      <QuotesAuthor author={state.author} color={state.color} />
    </div>
  );
};
