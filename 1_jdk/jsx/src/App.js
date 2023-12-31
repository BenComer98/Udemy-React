
// 4) Create a component
function App() {
    // You have to return any elements you create!
    // <h9>This shouldn't show up!</h9>;

    // Doing some computation
    // let message = 'Not hello world?';
    // if (Math.random() > 0.5) {
    //    message = 'Hello world!';
    // }

    // return message

    // Practicing with variables
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // Use curly braces to print out the val or a var
    // return <h1>{time}</h1> <- equivalent to the below
    // return <h1>{new Date().toLocaleTimeString()}</h1>;

    // const name = 'Ben';
    // const age = 24;

    // return (
    //    <h1>
    //        Hi, my name is {name} and my age is {age}.
    //    </h1>
    //)

    // The Props system
    // Customize input variables, and limit input values

    // Objects can't be passed as something to display, but CAN
    // be added as a prop
    // return <input style={{ border: '3px dotted cyan' }} type="number" min={5}/>;

    // autofocus doesn't work... quite. We need to translate a bit
    // Converting HTML to JSX:
    // 1 camelCase for props (Check inspect element)
    // 2 Number attributes MUST use curly braces
    // 3 True can be written with just property name (<input spellCheck />). 
    //     False must be written out with {false} (<input spellCheck={false} />).
    // 4 class attribute is written as className.
    // 5 in-line styles are provided as objects. {{ textDecoration: 'none', padding: '5px'}}
    
    // return <textarea autoFocus={true} />

    return <h1>Hi there!</h1>;
}

export default App;

const namedExport = 'namedExport';
export {namedExport};