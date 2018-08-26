import React from 'react';
import {shallow} from 'enzyme';
import {Home2Component} from './Home2'
import {Loading} from "../../Components/Loading";
import {Error} from "../../Components/Error";
import {EmptyUsers} from "../../Components/EmptyUsers";
import {ListOfCards, ListOfCardsComponent} from "../../Components/ListOfCards";
import {Input} from "../../Components/Input";

describe("Test Home2 Component suite", () => {

    it("should render Home2 without error", () => {
        const wrapper = shallow(<Home2Component isLoading={true} error={null} users={[]}/>);
        expect(wrapper.exists()).toBe(true);

    });
    it("should render Loading without error", () => {
        const wrapper = shallow(<Home2Component isLoading={true} error={null} users={[]}/>);
        expect(wrapper.containsMatchingElement(<Loading/>)).toBe(true);
    });
    it("should render Error without error", () => {
        const wrapper = shallow(<Home2Component  error="Error"/>)
        expect(wrapper.containsMatchingElement(<Error/>)).toBe(true);
    });
    it("should render EmptyUsers without error", () => {
        const wrapper = shallow(<Home2Component  error={null} users={[]}/>);
        expect(wrapper.containsMatchingElement(<EmptyUsers/>)).toBe(true);
    });

    it("should render ListOfCards without error", () => {
        const wrapper = shallow(<Home2Component isLoading={false} error={null} users={["Luna"]}  fetchApi={()=>{}} clearSearch={()=>{}} loading={()=>{}}/>);
        wrapper.find(Input).simulate('change',{target: {value: 'ignlopezsanchez'}} )
        expect(wrapper.containsMatchingElement(<ListOfCards/>)).toBe(true);
    });
})