import React, {Component} from 'react';
import {Input} from '../../Components/Input';
import {ListOfCards} from '../../Components/ListOfCards'
import {connect} from "react-redux";
import axios from "axios";
import {fetchApi, fetchUserSuccess, fetchUserFail, clearSearch} from './search/searchActions'
import {Error} from '../../Components/Error'
import {Loading} from "../../Components/Loading";
import {EmptyUsers} from "../../Components/EmptyUsers";
import {Intro} from "../../Components/Intro";



export class Home2Component extends Component {
    constructor(props) {
        super(props)

        this.searchText = ""
    }

    
 
    handleChange = (e) => {
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
            content = <Loading/>
        }
        else if ( this.props.users.length === 0 && !this.props.error){
            content = <EmptyUsers/>
        }
        else {
            content = <ListOfCards/>}


        return (
            <React.Fragment>
                <Input onChange={(e) => this.handleChange(e)}/>
                {content}
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({error, isLoading, users}) => ({error, isLoading, users})

const mapDispatchToProps = {
    fetchApi,
    fetchUserSuccess,
    fetchUserFail,
    clearSearch,
}

export const Home2 = connect(mapStateToProps, mapDispatchToProps)(Home2Component)
