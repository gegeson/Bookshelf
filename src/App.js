import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Timeline from "./pages/timeline";
import Header from "./components/header";
import Bookshelf from "./pages/bookshelf";
import "./App.scss";

function App() {
  return (
    <Container className="App">
      <Header />

      <main>
        <Switch>
          <Route path="/timeline" component={Timeline} />
          <Route path="/book" component={Bookshelf} />
        </Switch>
      </main>
    </Container>
  );
}

export default App;
