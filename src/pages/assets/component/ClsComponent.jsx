import React, { Component } from "react";

class MyComponent extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }));
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState) {
        // Log a message whenever the count changes
        if (prevState.count !== this.state.count) {
            console.log(`Count updated: ${prevState.count} -> ${this.state.count}`);
        }
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
        console.log("Component will unmount");
        // Cleanup tasks like clearing timers, cancelling network requests, etc.
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };

    render() {
        console.log(this.props);

        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.count}</h1>
                <h1>Render Successfully</h1>
                <button onClick={this.increment}>Click</button>
            </div>
        );
    }
}

export default MyComponent;
