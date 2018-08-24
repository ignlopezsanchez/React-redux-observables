import React, {Component} from 'react';


export class Card extends Component {

    render() {
        return (
            <div>
                <h1>Usuario: {this.props.user.login}</h1>
                <img src={this.props.user.avatar_url}/>
            </div>
        );
    }
}

