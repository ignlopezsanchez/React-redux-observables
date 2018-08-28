import React, {Component} from 'react';
import {Card} from './Card'
import { connect } from 'react-redux'
//import { Card} from 'semantic-ui-react'
import "./ListOfCards.css"




export class ListOfCardsComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="test">
               {/* <Card.Group itemsPerRow={6}>

                    {this.props.users.map((element, index) => <Card
                         image={element.avatar_url}
                         header={element.login}
                         meta={element.type}

                        />)}

                </Card.Group>*/}
                    {this.props.users.map((element, index) => <Card key={index} user={element}/>)}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({users}) => ({users})
export const ListOfCards = connect(mapStateToProps)(ListOfCardsComponent)