import React from 'react';
import { shallow } from 'enzyme';
import {ListOfCardsComponent} from "./ListOfCards";
import {Card} from "./Card";

describe("Test ListOfCards Component suite", () => {
    it("should render ListOfCards without error", () => {
        const wrapper = shallow(<ListOfCardsComponent users={["joña", "hola"]}/>);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render ListOfCards Card", () => {
        const wrapper = shallow(<ListOfCardsComponent users={["joña", "hola"]}/>);
        expect(wrapper.find(Card).length).toBe(2);
    });
})