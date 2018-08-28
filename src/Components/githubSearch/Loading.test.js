import React from 'react';
import { shallow } from 'enzyme';
import {Loading} from "./Loading";

describe("Test ListOfCards Component suite", () => {

    it("should render Loading without error", () => {
        const wrapper = shallow(<Loading/>);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render loading text", () => {
        const wrapper = shallow(<Loading/>);
        expect(wrapper.find('h1').length).toBe(1);
    });
})