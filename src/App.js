
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainPage from "./components/MainPage";
import ArticlePage from './components/ArticlePage'
import ActivitiPage from './components/ActivitiPage'
import GalleryPage from './components/GalleryPage'
import PlacesPage from './components/PlacesPage'
import TravelPage from "./components/TravelPage";
const App =()=>{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/articles" component={ArticlePage}/>
          <Route exact path="/activities" component={ActivitiPage}/>
          <Route exact path="/gallery" component={GalleryPage}/>
          <Route exact path="/places" component={PlacesPage}/>
          <Route exact path="/travel" component={TravelPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
