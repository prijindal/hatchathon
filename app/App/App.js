import React from 'react';

const App = () => (
  <div id="terminal">
    <textarea cols={79} rows={28} id="editor"></textarea>
    <br/>
    <input type="text" name="commands" id="commands"></input>
  </div>
);

export default App;
