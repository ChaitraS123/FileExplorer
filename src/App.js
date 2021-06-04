import './App.css';
import Navbar from './Components/Navbar'
import Home from './Home'
import AirDrop from './AirDrop'
import Recents from './Recents'
import Applications from './Application'
import Downloads from './Downloads'
import Pictures from './Pictures'
import Music from './Music'
import Movies from './Movies'
import Cloud from './Cloud'
import Drive from './Drive'
import Documents from './Documents'
import Desktop from './Desktop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/airdrop" component={AirDrop} />
          <Route path="/recents" component={Recents} />
          <Route path="/applications" component={Applications} />
          <Route path="/downloads" component={Downloads} />
          <Route path="/pictures" component={Pictures} />
          <Route path="/music" component={Music} />
          <Route path="/movies" component={Movies} />
          <Route path="/cloud" component={Cloud} />
          <Route path="/desktop" component={Desktop} />
          <Route path="/drive" component={Drive} />
          <Route path="/documents" component={Documents} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
