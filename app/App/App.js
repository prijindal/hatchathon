import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const THEMES = [
  'default',
  'yellow-blue',
  'black',
  'steelblue',
  'fire',
];

import Editor from '../components/Editor';
import Login from '../components/Login';
import Home from '../components/Home/Home';

const App = ({ setTheme, theme }) => (
  <Router>
    <div id="main" className={theme}>
      <div id="flex1">
        <div id="heading">Vim-<span id="heading-bold">me</span></div>

        <div id="terminal-background">
          <div id="content"></div>
          <div id="terminal">
            <Route exact path="/" component={Editor} />
            <Route exact path="/login" component={Login} />
            <Route path="/quit" component={Home} />
          </div>
        </div>
      </div>
      <footer>
        <div>
          <ul>
            {THEMES.map((theme, idx) =>
              <li key={idx}><a onClick={() => setTheme(theme)} href="#"><div id={`a${idx + 1}`}></div></a></li>
            )}
          </ul>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
