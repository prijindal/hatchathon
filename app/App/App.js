import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import Editor from '../components/Editor/Editor';
import Home from '../components/Home/Home';

const App = () => (
  <Router>
    <div id="main">
      <div id="flex1">
        <div id="heading">Vim-<span id="heading-bold">me</span></div>

        <div id="terminal-background">
          <div id="content"></div>
          <div id="terminal">
            <Route exact path="/" component={Editor} />
            <Route path="/quit" component={Home} />
          </div>
        </div>
      </div>
      <footer>
        <div>
          <ul>
            <li><a href=".default">R</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
