import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Insert from './component/insert'
import MoviesList from './component/allList'
import ImageUpload from './imageUpload'
import ReactUploadImage from "./reactUploadImage";
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
      <a href="../public/image.html">Button</a>
      <MoviesList/> 
      <Switch>
         <Route  path ="/" exact component = {Insert}></Route>           
       </Switch>
       <ReactUploadImage/>
       <ImageUpload/>
    </Router>
  );
}

export default App;
