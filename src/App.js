import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Timelines from "./pages/timeline";
import Header from "./components/header";
import Bookshelf from "./pages/bookshelf";
import Home from "./pages/home";
import "./css/App.scss";

function App() {
  return (
    <Container className="App">
      <Header />

      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/timeline" component={Timelines} />
          <Route path="/book" component={Bookshelf} />
          <Redirect from="/" to="/book" />
        </Switch>
      </main>
    </Container>
  );
}

export default App;
