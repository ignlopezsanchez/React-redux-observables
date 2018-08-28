import React, { Component } from "react";

import { connect } from "react-redux";
// import axios from "axios";
import {
  fetchApi,
  clearSearch,
  fetchWeatherSuccess,
  fetchWeatherFail,
  fetchWeatherApi,
  clearWeatherSearch
} from "./weather/weatherActions";
import { Error } from "../../Components/githubSearch/Error";
import { Loading } from "../../Components/githubSearch/Loading";
import { EmptyUsers } from "../../Components/githubSearch/EmptyUsers";
import { Container, Segment, Loader, Dimmer } from "semantic-ui-react";

// import {Intro} from "../../Components/Intro";

export class WeatherComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWeatherApi("london");
  }
  componentWillUnmount() {
        this.props.clearWeatherSearch();
    }

    handleHoverEnter = (e) => {
      console.log("e  ",e.target.textContent)

    }
  render() {

    return <div onMouseEnter={(e) => this.handleHoverEnter(e)}>dfdf</div>;
  }
}

const mapStateToProps = ({ weather }) => ({
  error: weather.error,
  isLoading: weather.isLoading,
  users: weather.users
});

const mapDispatchToProps = {
  fetchWeatherApi,
  fetchWeatherSuccess,
  fetchWeatherFail,
  clearWeatherSearch
};

export const Weather = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherComponent);
