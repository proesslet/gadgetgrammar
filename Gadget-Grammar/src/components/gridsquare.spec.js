import { mount } from "@vue/test-utils";
import GridSquare from "./gridsquare.vue";
import { test } from "vitest";

const wrapper = mount(GridSquare);

test("GridSquare renders", () => {
  expect(wrapper.html()).toContain("div");
});

test("GridSquare has a class of initial by default", () => {
  expect(wrapper.classes()).toContain("initial");
});
