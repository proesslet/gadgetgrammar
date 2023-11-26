import { mount } from "@vue/test-utils";
import GridSquare from "./gridsquare.vue";
import { it, test } from "vitest";

describe("GridSquareInitial", () => {
  it("renders", () => {
    const wrapper = mount(GridSquare);
    expect(wrapper.html()).toContain("div");
  });

  it("initally has a class of 'initial'", () => {
    const wrapper = mount(GridSquare);
    expect(wrapper.classes()).toContain("initial");
  });
});
