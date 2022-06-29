import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1>Hi, something went wrong. Kindly try again after sometime.</h1>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;