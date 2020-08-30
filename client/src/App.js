import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Insert from './insert'
import MoviesList from './allList'
//import "./imageUpload.css";
//import ImageUpload from "./imageUpload";
function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

function App() {
  return (
    <Router>
      <MoviesList/> 
      <Switch>
         <Route  path ="/allMovie" exact component = {Insert}></Route>           
       </Switch>
    </Router>
  );
}

export default App;
