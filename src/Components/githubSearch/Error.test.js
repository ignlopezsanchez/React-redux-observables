import React from 'react';
import { shallow } from 'enzyme';
import {Error} from "./Error";

describe("Test Error Component suite", () => {
    it("should render Error without error", () => {
        const wrapper = shallow(<Error />);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render Error text", () => {
        const wrapper = shallow(<Error />);
        expect(wrapper.find('h1').length).toBe(1);
    });
})
