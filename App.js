
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './Login';
import Error from './Error';


function App() {
  return (
    <div className="App">
    <h1>Welcome</h1>
    <Router>
 <Switch>
     <Route path="/" exact component={Login} />
     <Route path="/error" component={Error}/>
</Switch>
</Router>
    </div>
  );
}

export default App;
