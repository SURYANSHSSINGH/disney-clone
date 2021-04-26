import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from "./Comp/Login"
import Header from "./Comp/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
          
          <Login />
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
