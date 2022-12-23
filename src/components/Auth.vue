<template>
  <form @submit.prevent="login">
    <label for="username">Username:</label>
    <input id="username" v-model="username" type="text" />
    <br />
    <label for="password">Password:</label>
    <input id="password" v-model="password" type="password" />
    <br />
    <button type="submit">Log in</button>
  </form>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8080/login', {
          username: this.username,
          password: this.password,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>

</style>