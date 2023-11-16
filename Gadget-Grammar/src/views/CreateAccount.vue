<template>
  <div>
    <h1>Create Account</h1>
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
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Enter Email"
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
      <button type="button" class="btn btn-primary" @click="register">
        Create Account
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateAccount",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "/user/register",
        data: {
          username: this.username,
          email: this.email,
          password: this.password,
        },
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
