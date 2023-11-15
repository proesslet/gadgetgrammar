<template>
  <div
    class="text-dark modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Login</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="username"
                placeholder="Enter Username"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Enter Password"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="rememberme"
                name="rememberme"
                checked
              />
              <label for="rememberme" class="form-check-label"
                >Remember Me
              </label>
            </div>
            <div class="mb-3">
              <p>
                Don't have an account?
                <a href="#" @click="goToRegister">Create one</a>
              </p>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="closeLoginModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="login">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "LoginModal",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios({
        method: "post",
        url: "/user/login",
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        console.log(res);
        this.$store.commit("changeLoggedIn", true);
        this.$store.commit("changeUser", res.data.user);
        document.getElementById("closeLoginModal").click();
        router.push("/game");
      });
    },
    goToRegister() {
      document.getElementById("closeLoginModal").click();
      router.push("/create-account");
    },
  },
};
</script>
