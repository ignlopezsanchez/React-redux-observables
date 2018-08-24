import React, {Component} from 'react';


export class Input extends Component {

    render() {
        return <input onChange={this.props.onChange}/>
    }
}
