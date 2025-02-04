import React, {Component, Fragment} from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
    return (
        <>
            {
                [0,1,2].map(function (i) {
                    return(
                        <React.Fragment key={i}>
                            Counter {i} defined by {`<Counter init='5' end='${10 + i}' />`} : <br/>
                            <Counter init='5' end={10 + i}/>
                            <br/><br/>
                        </React.Fragment>
                    )
                })
            }
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
