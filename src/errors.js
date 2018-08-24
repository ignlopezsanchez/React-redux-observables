import Input from "./Components/Input";
import Intro from "./Components/Intro";
import Error from "./Components/Error";
import Loading from "./Components/Loading";
import EmptyUsers from "./Components/EmptyUsers";
import {ListOfCards} from "./Components/ListOfCards";
import React from "react";

if (error.response) {
    this.props.updateError(error.response.data.message)
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("message ", error.response.data.message);
    console.log("error.response.data ", error.response.data);
    console.log("error.response.status ", error.response.status);
    console.log("error.response.header ", error.response.headers);
}
else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("error.request ", error.request);
}
else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error generico', error.message);
}
console.log("error.config ", error.config);











<React.Fragment>
    <Input onChange={(e) => this.handleChange(e)}/>

    {this.searchText.length === 0 && !this.props.isLoading && this.props.users === null && <Intro/>}

    {this.props.error && <Error message={this.props.error}/> }


    {this.props.isLoading && this.searchText &&  <Loading/>}



    { ( (this.props.users && this.props.users.items.length === 0 && !this.props.error  ) ? <EmptyUsers/> : (this.props.isLoading ? null : <ListOfCards/>))}
</React.Fragment>