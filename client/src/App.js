import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Insert from './component/insert'
import MoviesList from './component/allList'
import ImageUpload from './component/imageUpload'

function App() {
  return (
    <Router>
      <MoviesList/> 
      <Switch>
         <Route  path ="/" exact component = {Insert}></Route>           
       </Switch>
       <ImageUpload/>
    </Router>
  );
}

export default App;
