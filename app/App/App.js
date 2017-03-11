import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import Editor from '../components/Editor/Editor';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';

const App = () => (
  <Router>
    <div id="main">
      <div id="flex1">
        <div id="heading">Vim-<span id="heading-bold">me</span></div>

        <div id="terminal-background">
          <div id="content">
            <div className="msg-type1">
              Welcome to Vim-me!!
            </div>

            <div className="msg-type2">
              Welcome to Vim-me!!
            </div>

            <div className="msg-type1">
              Welcome to Vim-me!!
            </div>

            <div className="msg-type1">
              Welcome to Vim-me!!
            </div>

            <div className="msg-type2">
              Welcome to Vim-me!!
            </div>

          </div>
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
            <li><a href=".default"><div id="a1"></div></a></li>
            <li><a href=".yellow-blue"><div id="a2"></div></a></li>
            <li><a href=".black"><div id="a3"></div></a></li>
            <li><a href=".steelblue"><div id="a4"></div></a></li>
            <li><a href=".fire"><div id="a5"></div></a></li>
          </ul>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
