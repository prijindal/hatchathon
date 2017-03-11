import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import Editor from '../components/Editor/Editor';

const App = () => (
  <Router>
    <Route path="/editor" component={Editor} />
  </Router>
);

export default App;
