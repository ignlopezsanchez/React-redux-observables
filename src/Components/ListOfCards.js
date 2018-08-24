import React, {Component} from 'react';
import {Card} from './Card'
import { connect } from 'react-redux'


export class ListOfCardsComponent extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.users.map((element, index) => <Card key={index} user={element}/>)}
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({users}) => ({users})
export const ListOfCards = connect(mapStateToProps)(ListOfCardsComponent)