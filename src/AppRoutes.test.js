import {shallow} from "enzyme/build";
import React from "react";
import AppRoutes from "./AppRoutes";

it("should render appRoutes without error", () => {
    const wrapper = shallow(<AppRoutes/>);
    expect(wrapper.exists()).toBe(true);
});