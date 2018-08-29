import React, {Component} from 'react';
import {Input} from '../../Components/githubSearch/Input';
import {ListOfCards} from '../../Components/githubSearch/ListOfCards'
import {connect} from "react-redux";
import {fetchApi, fetchUserSuccess, fetchUserFail, clearSearch} from './search/searchActions'
import {Error} from '../../Components/githubSearch/Error'
import {Loading} from "../../Components/githubSearch/Loading";
import {EmptyUsers} from "../../Components/githubSearch/EmptyUsers";
import { Container, Segment} from 'semantic-ui-react'



export class Home2Component extends Component {
    constructor(props) {
        super(props)
        this.searchText = ""
    }

    
 
    handleChange = (e) => {
        this.setState({hola: e.target.value})
        this.searchText = e.target.value
        
        if (e.target.value === "") {
            this.props.clearSearch();
            return;
        }
        this.props.fetchApi(this.searchText)
       

    }
    componentWillUnmount(){
        console.log("holaaaaaaa")
        this.props.clearSearch()
    }

    render()
    {
        let content;
        
        if (this.props.error) {
            content = <Error message={this.props.error}/>}
        else if (this.props.isLoading)  {
            // content = <Dimmer active><Loader/></Dimmer>
            content = <Loading/>
        }
        else if ( this.props.users.length === 0 && !this.props.error){
            content = <EmptyUsers/>
        }
        else {
            content = <ListOfCards/>}


        return (
            <React.Fragment>
                <Container>
                    <Segment stacked>
                        <Input onChange={(e) => this.handleChange(e)}/>
                        {content}
                    </Segment>
                </Container>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({search}) => ({error: search.error, isLoading: search.isLoading, users: search.users})

const mapDispatchToProps = {
    fetchApi,
    fetchUserSuccess,
    fetchUserFail,
    clearSearch,
}

export const Home2 = connect(mapStateToProps, mapDispatchToProps)(Home2Component)
