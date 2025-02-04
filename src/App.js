import React, {Component, Fragment} from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
    const [total, setTotal] = useState(0);
    return (
        <>
            <Counter focus setTotal={setTotal}/>
            <hr/>
            <Counter setTotal={setTotal}/>
            <hr/>
            <Counter setTotal={setTotal}/>
            <hr/>
            <b>Total:{total}</b>
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

export default App;