import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage";
import { SubmitPage } from "./components/Pages/SubmitPage";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
      <Route path="/submit" exact component={SubmitPage}/>
    </Router>
  );
}

export default App;
