import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage";
import { SubmitPage } from "./components/Pages/SubmitPage";
import { LoginPage } from "./components/Pages/LoginPage";
import { SignupPage } from "./components/Pages/SignupPage";
import { ProfilePage } from "./components/Pages/ProfilePage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
const token= localStorage.getItem("Jwt Token");

axios.interceptors.request.use(
  config => {
    if(token){
      config.headers.Authorization = "Bearer " + token;
    }
    config.headers.post["access-control-allow-origin"] = "*";
    return config;
  }
)

//Todo: Fix me
//onRejected should be blocked and onFullfilled should be passed to the right location
// axios.interceptors.response.use(
//   (onFulfilled: AxiosResponse) => {
//     console.log("onFulfilled")
//   }
  
//   (onRejected: AxiosResponse<ErrorResponse>) => {
//     console.log("onRejected")
//     console.log(onRejected);
//   }
// )

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
