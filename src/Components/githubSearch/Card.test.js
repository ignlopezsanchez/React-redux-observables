import {shallow} from "enzyme/build";
import {Card} from "./Card";
import React from "react";
describe("Test Card Component suite", () => {
    it("should render Card without error", () => {
        const wrapper = shallow(<Card user=""/>);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render Card text", () => {
        const username = "Pepe"
        const wrapper = shallow(<Card user={username}/>);
        expect(wrapper.find('h1').text()).toContain('Usuario: ');
    });
    it("should render Card text with a img", () => {
        const wrapper = shallow(<Card user=""/>);
        expect(wrapper.find('img').length).toBe(1);
    });
})