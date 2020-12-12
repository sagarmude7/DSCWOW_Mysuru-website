
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainPage from "./components/MainPage";
import ArticlePage from './components/ArticlePage'
const App =()=>{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/articles" component={ArticlePage}/>
          <Route exact path="/gallery" render={() => {window.location.href="./components/Gallery.html"}} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
