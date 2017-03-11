import React from 'react';

import search from '../utils/search';

console.log(search('ABCDDABC', 'ABC'));

const App = () => (
	<div>
		<div id="heading">Vim-<span id="heading-bold">me</span></div>

		<div id="terminal">
			<span id="head-terminal">Vim-me</span>
			<textarea cols={79} rows={28} id="editor"></textarea>
			<br/>
			<input type="text" name="commands" id="commands"></input>
		</div>
	</div>
);

export default App;
