import React from 'react';
import {shallow} from 'enzyme';
import {Home2Component} from './Weather'
import {Loading} from "../../Components/githubSearch/Loading";
import {Error} from "../../Components/githubSearch/Error";
import {EmptyUsers} from "../../Components/githubSearch/EmptyUsers";
import {ListOfCards, ListOfCardsComponent} from "../../Components/githubSearch/ListOfCards";
import {Input} from "../../Components/githubSearch/Input";

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