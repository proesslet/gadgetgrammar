import { mount } from "@vue/test-utils";
import Grid from "./grid.vue";
import { test, describe } from "vitest";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Grid", () => {
  it("gets word on mount", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("/newWord").reply(200, {
      word: "array",
    });
    const wrapper = mount(Grid);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.word).toBe("ARRAY");
  });

  test("Grid renders", () => {
    const wrapper = mount(Grid);
    expect(wrapper.html()).toContain("div");
  });

  test("Grid accepts keyboard input", async () => {
    const wrapper = mount(Grid);
    wrapper.trigger("keydown", { key: "z" });
    expect(wrapper.html()).toContain("Z");
  });
});

describe("Test Gameplay", () => {
  it("Plays a winning game", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("/newWord").reply(200, {
      word: "array",
    });

    // Mock store
    const actions = {
      getUser: vi.fn(),
    };
    
    const store = createStore({
        state: {
            loggedIn: true,
            user: {
              username: "test",
              currentstreak: 0,
              higheststreak: 0,
            },
        },
        actions,
        });

    // Simulate a whole game
    const wrapper = mount(Grid, {
      global: {
        plugins: [store],
      },
    });
    
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.word).toBe("ARRAY");
    wrapper.vm.handleInputComplete(["A", "R", "R", "A", "Y"]);
    expect(wrapper.vm.gameWon).toBe(true);
  });
});
