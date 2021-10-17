import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage";
import { SubmitPage } from "./components/Pages/SubmitPage";
import { LoginPage } from "./components/Pages/LoginPage";
import { SignupPage } from "./components/Pages/SignupPage";
import { ProfilePage } from "./components/Pages/ProfilePage";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
      <Route path="/submit" exact component={SubmitPage}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/signup" exact component={SignupPage}/>
      <Route path="/profile" exact component={ProfilePage}/>
    </Router>
  );
}

export default App;
