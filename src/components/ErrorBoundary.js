import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state ={
			hasError: false
		}
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops! That's not good.</h1>
		}
		return this.props.children
	}

	componentDidCatch(error, info) {
		this.setState({hasError : true})
	}
}

export default ErrorBoundary;