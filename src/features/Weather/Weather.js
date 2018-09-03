import React, { Component } from "react";

import { connect } from "react-redux";
import {

  fetchWeatherSuccess,
  fetchWeatherFail,
  fetchWeatherApi,
  clearWeatherSearch
} from "./weather/weatherActions";

import { Container, Message, Segment, Loader, Dimmer, Card, Image, Icon } from "semantic-ui-react";


export class WeatherComponent extends Component {
  constructor(props) {
    super(props)
      this.state = {
        searchText: ""
      }
  }

  componentWillUnmount() {
    this.props.clearWeatherSearch();
  }

  handleHoverEnter = e => {
    this.props.fetchWeatherApi(e.target.textContent);
  };
  handleHoverLeave = e => {
    this.props.clearWeatherSearch();
  };
  handleChange = e => {
        this.setState({searchText: e.target.value})

    };


    render() {
    const cities = [
      "London",
      "Madrid",
      "New York",
      "Sao Paulo",
      "Zaragoza",
      "Berlin",
      "nn"
    ];
    return (

      <Container>
          <input onChange={(e)=> this.handleChange(e)} placeholder="Esccriba una ciudad"/><br/>
        {cities.filter(e => e.toLowerCase().includes(this.state.searchText.toLowerCase())).map((city, i) => (
          <span
            onMouseEnter={e => this.handleHoverEnter(e)}
            onMouseLeave={e => this.handleHoverLeave(e)}
            key={i}
          >
            {`${city}                                               `}
          </span>
        )) }
        {this.props.isLoading && (
          <Segment size="massive">
            <Dimmer active>
              <Loader size="mini">Loading</Loader>
            </Dimmer>
          </Segment>
        )}

        {this.props.error && (
          <Message negative>
            <Message.Header>
                ERROR
            </Message.Header>
            <p>{this.props.error}</p>
          </Message>
        )}

        {this.props.main && (
            <Card
                centered
                image={`http://openweathermap.org/img/w/${this.props.icon}.png`}
                header={this.props.name}
                meta={this.props.main}
                description={this.props.description}
                extra={`${this.props.temperature} ºC`}
            />

        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  error: weather.error,
  isLoading: weather.isLoading,
  main: weather.weather.main,
  description: weather.weather.description,
  icon: weather.weather.icon,
  temperature: weather.weather.temperature,
  temperature_min: weather.weather.temperature_min,
  temperature_max: weather.weather.temperature,
  humidity: weather.weather.humidity,
  name: weather.weather.name
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





{/*
<Card centered>
    <Image centered size="small" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} />
    <Card.Content>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Meta>
            <span className='date'>{this.props.main}</span>
        </Card.Meta>
        <Card.Description>{this.props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
            <Icon name='user' />
            22 Friends
        </a>
    </Card.Content>
</Card>*/}
