import React from 'react';

import search from '../utils/search';

console.log(search('ABCDDABC', 'ABC'));

const App = () => (
	<div>
		<h1>Vim-me</h1>
		<div id="terminal">
			<textarea cols={79} rows={28} id="editor"></textarea>
			<br/>
			<input type="text" name="commands" id="commands"></input>
		</div>
	</div>
);

export default App;
