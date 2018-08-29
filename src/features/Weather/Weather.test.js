import React from 'react';
import {shallow} from 'enzyme';
import {WeatherComponent} from './Weather'

import { Message,Loader, Card , Segment, Container, Dimmer} from "semantic-ui-react";


describe("Test Weather Component suite", () => {

    it("should render Home2 without error", () => {
        const wrapper = shallow(<WeatherComponent isLoading={true} error={null} main={null}/>);
        expect(wrapper.exists()).toBe(true);

    });
    it("should render Loading without error", () => {
        const wrapper = shallow(<WeatherComponent isLoading={true}/>);
        expect(wrapper.containsMatchingElement(
                    <Loader size="mini">Loading</Loader>)).toBe(true);
    });
    it("should render Error without error", () => {
        const wrapper = shallow(<WeatherComponent  isLoading={false} error="Error"/>)
        expect(wrapper.containsMatchingElement(<Message negative={true}><Message.Header>
                ERROR
            </Message.Header>
                <p>
                    Error
                </p>
            </Message>
        )).toBe(true);
    });

    it("should render Weather Card without error", () => {
        const wrapper = shallow(<WeatherComponent isLoading={false} error={null} main="Clear" />);
        expect(wrapper.containsMatchingElement(<Card/>)).toBe(true);
    });
})