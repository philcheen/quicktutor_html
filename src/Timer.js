import React from 'react';
import {BooksContext} from "./BooksContext";

export default class Timer extends React.Component {
    static contextType = BooksContext;
    interval = null;
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {
            initial: 0,
            time: 0,
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        if (props.time !== state.initial) {
            return {
                initial: props.time,
                time: props.time,
            };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        return nextState.time % 2 === 0;
    }

    render() {
        console.log('render');
        console.log(this.context);
        return <div>
            time:{this.context.time}
            show:{this.context.show.toString()}
        </div>;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return Date.now();
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(
            () => this.setState(state => ({time: state.time + 1})),
            1000,
        );
    }

    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log('componentDidUpdate');
        if (oldState.initial !== this.state.initial) {
            console.log(`${snapshot}: Time was reset`);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    }
}