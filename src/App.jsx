import {} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
import Home from './components/Home';
import Panels from './components/Panels';
import Data from './components/Data';
import Contact from './components/Contact';
import About from './components/About'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/panels" component={Panels} />
          <Route path="/data" component={Data} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
