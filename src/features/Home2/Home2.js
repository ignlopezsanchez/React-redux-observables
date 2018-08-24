import React, {Component} from 'react';
import {Input} from '../../Components/Input';
import {ListOfCards} from '../../Components/ListOfCards'
import {connect} from "react-redux";
import axios from "axios";
import {updateUsers, updateError, fetchUserSuccess, fetchUserFail, clearSearch, loading} from './search/searchActions'
import {Error} from '../../Components/Error'
import {Loading} from "../../Components/Loading";
import {EmptyUsers} from "../../Components/EmptyUsers";
import {Intro} from "../../Components/Intro";



export class Home2Component extends Component {
    constructor(props) {
        super(props)

        this.searchText = ""
    }

    fetchSuccess = res => {
        this.counterError = 0;
        this.props.updateUsers(res.data.items);
        this.props.fetchUserSuccess()
    }
    fetchError = error => {
        this.counterError++
        if (this.counterError > 2) {
            this.props.updateError(error.response.data.message);
            this.props.fetchUserFail()
            return;
        }
        this.fetchApi()
    }

    launchTimeOut = () => {
        this.myVar = setTimeout(() => {
            this.fetchApi()
        }, 1000)
    }



    fetchApi = () => {
       if (this.searchText !== "") {
           axios.get(`https://api.github.com/search/users?q=${this.searchText}+type:user+in:login`, {
            cancelToken: this.CancelToken.source().token
        })
            .then((res) => this.fetchSuccess(res))
            .catch((error) => this.fetchError(error))
       }
       else return;

    }
    handleChange = (e) => {
        this.searchText = e.target.value
        clearTimeout(this.myVar);
        this.CancelToken.source().cancel('Operation canceled by the user.');
        if (this.searchText === "") {
            this.props.clearSearch();
            return;
        }
        this.props.loading()
        this.launchTimeOut()

    }

    componentWillUnmount()
    {
        this.props.clearSearch();
        this.CancelToken.source().cancel('Operation canceled by the user.');
        clearTimeout(this.myVar);

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
    updateUsers,
    updateError,
    fetchUserSuccess,
    fetchUserFail,
    clearSearch,
    loading
}

export const Home2 = connect(mapStateToProps, mapDispatchToProps)(Home2Component)
