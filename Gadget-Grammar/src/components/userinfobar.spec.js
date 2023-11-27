import { mount } from "@vue/test-utils";
import UserInfoBar from "./userinfobar.vue";
import { test, describe } from "vitest";
import { createStore } from "vuex";

describe("UserInfoBar", () => {
  test("UserInfoBar renders with user info", () => {
    const actions = {
      getUser: vi.fn(),
    };
    const store = createStore({
      state: {
        user: {
          username: "test",
          currentstreak: 0,
          higheststreak: 0,
        },
      },
      actions,
    });

    const wrapper = mount(UserInfoBar, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find("h4").text()).toBe("Welcome, test");
  });
});
