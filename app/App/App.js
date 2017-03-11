import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import EditorPage from '../components/EditorPage';
import Login from '../components/Login';
import Intro from '../components/Intro/Intro';
import Home from '../components/Home/Home';

const THEMES = [
  'default',
  'yellow-blue',
  'black',
  'steelblue',
  'fire',
];

const App = ({ setTheme, theme, tutorials }) => (
  <Router>
    <div id="main" className={theme}>
      <div id="flex1">
        <div id="heading">Vim-<span id="heading-bold">me</span></div>

        <div id="terminal-background">
          <div id="content">
            {tutorials.map((tutorial, idx) =>
              <div key={idx} className={`msg-type${(idx % 2) + 1}`}>
                {tutorial.content}
              </div>,
            )}

          </div>
          <div id="terminal">
            <Route exact path="/" component={EditorPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/intro" component={Intro} />
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
