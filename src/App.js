import React, {Component, Fragment} from 'react';
import {useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

const totalContext = createContext();

function App() {
    const [total, setTotal] = useState(0);
    return (
        <>
            <totalContext.Provider value={[total, setTotal]}>
                <Counter/>
                <hr/>
                <Counter />
                <hr/>
                <Counter/>
                <hr/>
                <b>Total:{total}</b>
            </totalContext.Provider>
        </>
    );
}

// class App extends Component {
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
export {App, totalContext};