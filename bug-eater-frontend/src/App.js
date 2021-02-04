import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import BugsIndex from './components/BugsIndex'
import BugsForm from './components/BugsForm'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/bugs" component={BugsIndex}/>
          <Route path="/bugs/new" component={BugsForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
