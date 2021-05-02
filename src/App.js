import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from "./Comp/Login"
import Header from "./Comp/Header";
import Home from "./Comp/Home";
import Detail from './Comp/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
          <Login />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/detail/:id" >
            <Detail/>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
