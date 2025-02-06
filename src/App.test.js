import React, {createContext} from 'react';
import './App.css';
import Timer from './Timer';
import {BooksContext} from "./BooksContext";

class AppTest extends React.Component {
    state = {
        time: 0,
        show: true,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !this.state.error;
    }

    static getDerivedStateFromError(error) {
        if (error) {
            alert(error.message);
        }
        return {
            error: error.message
        }
    }

    // componentDidCatch(error, info) {
    //     console.log('*'.repeat(20));
    //     console.log(error, info);
    //     console.log('*'.repeat(20));
    // }

    handleClick() {
        this.setState({time: Math.floor(Math.random() * 10)});
    }

    handleToggleShow() {
        this.setState((state) => ({...state, show: !state.show}));
    }

    render() {
        return (
            <BooksContext.Provider value={this.state}>
                <Timer/>
            </BooksContext.Provider>
        )
    }
}

export default AppTest;