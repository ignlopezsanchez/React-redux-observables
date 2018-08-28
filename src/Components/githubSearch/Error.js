import React, {Component} from 'react';


export class Error extends Component {

    render() {
        return <h1>Se ha producido el siguiente error: {this.props.message}</h1>

    }
}

