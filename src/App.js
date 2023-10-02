import React from "react";
import { Quotes } from "./Quotes/Quotes";
import { Button } from "./Components/Button";
import { Footer } from "./Components/Footer";
import { QuotesAuthor } from "./Components/QuotesAuthor";
import { QuotesText } from "./Components/QuotesText";

function App() {
  return (
    <div className="App">
      <Quotes />

      <Footer />
    </div>
  );
}

export default App;
