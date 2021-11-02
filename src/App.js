import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Timelines from "./pages/timeline";
import Header from "./components/header";
import Bookshelf from "./pages/bookshelf";
import "./App.css";

function App() {
  return (
    <Container className="App">
      <Header />

      <main>
        <Switch>
          <Route path="/timeline" component={Timelines} />
          <Route path="/book" component={Bookshelf} />
        </Switch>
      </main>
    </Container>
  );
}

export default App;
