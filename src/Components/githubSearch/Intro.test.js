import React from 'react';
import { shallow } from 'enzyme';
import {Intro} from "./Intro";

describe("Test Intro Component suite", () => {

    it("should render Intro without error", () => {
        const wrapper = shallow(<Intro/>);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render Intro text", () => {
        const wrapper = shallow(<Intro/>);
        expect(wrapper.find('h1').length).toBe(1);
    });
})