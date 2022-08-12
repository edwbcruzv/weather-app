// import PropTypes from 'prop-types'

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
//   static propTypes = {second: third}

    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {hasError:true}
    }

    componentDidCatch(error,errorInfo){
        console.log("ErrorInfo:",errorInfo)
    }

    render() {
        return (
            this.state.hasError?
            (<h1>Hubo un Error</h1>):(this.props.children)
        )
    }
}
