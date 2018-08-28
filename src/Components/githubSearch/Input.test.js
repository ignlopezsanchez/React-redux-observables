import React from 'react';
import { shallow } from 'enzyme';
import {Input} from "./Input";

describe("Test Input Component suite", () => {
    it("should render Input without error", () => {
        const wrapper = shallow(<Input/>);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render an input ", () => {
        const wrapper = shallow(<Input/>);
        expect(wrapper.find('input').length).toBe(1);
    });
})