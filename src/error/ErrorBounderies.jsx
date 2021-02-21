import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
       
    }

    render() {
        if (this.state.hasError) {
            console.log("error hai bro")
            return <h1>something went wrong</h1>
        }

        return this.props.children;
    }
}
