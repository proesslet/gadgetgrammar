<template>
    <div>
      <h1>Create Account</h1>
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter Username">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter Email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter Password">
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "CreateAccount",
  };
  </script>