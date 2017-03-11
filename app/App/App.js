import React from 'react';

const App = () => (
  <div id="terminal">
    <textarea cols={90} rows={30} id="editor"></textarea>
    <br/>
    <input type="text" name="commands" id="commands"></input>
  </div>
);

export default App;
