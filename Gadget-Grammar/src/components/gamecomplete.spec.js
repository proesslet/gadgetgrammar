import { mount } from "@vue/test-utils";
import GameOver from "./gamecomplete.vue";
import { describe } from "vitest";
// import { expect, test } from "vitest";

describe("GameOverWon", () => {
  const wrapper = mount(GameOver, {
    props: {
      won: true,
    },
  });

  it("renders", () => {
    expect(wrapper.html()).toContain("div");
  });

  it("displays a winning message", () => {
    expect(wrapper.html()).toContain("You Won!");
  });
});

describe("GameOverLost", () => {
  const wrapper = mount(GameOver, {
    props: {
      won: false,
    },
  });

  it("renders", () => {
    expect(wrapper.html()).toContain("div");
  });

  it("displays a losing message", () => {
    expect(wrapper.html()).toContain("You Lost");
  });
});
