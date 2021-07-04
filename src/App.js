import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Company from "./components/Company/Company";
import Account from "./components/Account/Account";
import NewUser from "./components/NewUser/NewUser";
import NewCompany from "./components/NewCompany/NewCompany";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/account">
            <Home />
            <Account />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
          <Route path="/new-company">
            <NewCompany />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
