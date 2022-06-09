import React from "react";
import { SearchProvider } from "./context";
import Search from "./components/Search";
import "./App.scss";

function App() {
  return (
    <section className="page-container">
      <SearchProvider>
        <Search />
      </SearchProvider>
    </section>
  );
}

export default App;
