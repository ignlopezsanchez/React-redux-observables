import React from 'react';
import { shallow } from 'enzyme';
import {EmptyUsers} from "./EmptyUsers";

describe("Test EmptyUser Component suite", () => {
    it("should render EmptyUsers without error", () => {
        const wrapper = shallow(<EmptyUsers/>);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render EmptyUsers text", () => {
        const wrapper = shallow(<EmptyUsers/>);
        expect(wrapper.find('h1').length).toBe(1);
    });
})