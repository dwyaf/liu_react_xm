// import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import Home from "./pages/home";
import Login from './pages/login/login';
import Redmi from './components/redmi/redmi';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return(
      <Fragment>
          <HashRouter>
              <Switch>
                  <Route path="/redmi" component={Redmi} />
                  <Route path="/login" component={Login} />
                  <Route path="/home" component={Home} />
                  <Route exact path="/" component={Login} />
                  <Redirect to={"/home"} />
              </Switch>
          </HashRouter>
      </Fragment>
  )

  
}

export default App;
