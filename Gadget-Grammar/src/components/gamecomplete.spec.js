import { mount } from "@vue/test-utils";
import GameOver from "./gamecomplete.vue";
// import { expect, test } from "vitest";
const wrapper = mount(GameOver, {
  props: {
    won: true,
  },
});

test("Game Over", () => {
  expect(wrapper.html()).toContain("Game Over");
});

test("Play Again Button", () => {
  expect(wrapper.find("button").text()).toBe("Play Again");
});

test("Game Over but Won", () => {
  expect(wrapper.html()).toContain("You Won!");
});

const wrapper2 = mount(GameOver, {
  props: {
    won: false,
  },
});

test("Game Over but Lost", () => {
  expect(wrapper2.html()).toContain("You Lost");
});
