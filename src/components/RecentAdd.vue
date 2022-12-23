<template>
  template: `
  <ul>
    <li v-for="record in records" :key="record.id">{{ record.title }}</li>
  </ul>
  `
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      records: []
    }
  },
  methods: {
    async fetchRecords() {
      try {
        const response = await axios.get('/api/recentRecords');
        this.records = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.fetchRecords();
  },
};
</script>

<style scoped>

</style>
