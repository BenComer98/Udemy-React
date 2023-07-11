// 5 Step process to create a React project
// 1) Import the React and ReactDOM libs
import React from 'react'; // No ./ means package
import ReactDOM from 'react-dom/client';
import MyApp, {namedExport} from './App'; // ./ means something we created

// 2) Get a reference to the div with ID root
// This goes into line 31 on index.html
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 5) Show the component on the screen
root.render(<MyApp/>);