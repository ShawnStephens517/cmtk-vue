<template>
  <form>
    <label>System:</label>
    <input v-model="system" type="text" />
    <br />
    <label>User:</label>
    <input v-model="user" type="text" />
    <br />
    <label>Message:</label>
    <textarea v-model="description"></textarea>
    <br />
    <label>Date:</label>
    <textarea v-model="date"></textarea>
    <br />
    <button @click="submitForm">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      System: '',
      User: '',
      Date: '',
      Description: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        const data = {message: this.message, name: this.name, email: this.email};
        await axios.post('/api/messages', data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<!-- TODO Radio Boxes for Actions Taken -->



