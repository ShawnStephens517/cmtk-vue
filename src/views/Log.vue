<script setup>
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div>
    <SideBar />
  </div>
  <div class="preference">
  <form @submit="handleSubmit">
    <label>Date:</label>
    <input v-model="date" type="date" />
    <br />
    <label>System Number:</label>
    <input v-model="system" type="text" />
    <br />
    <label>Action Taken:</label>
    <textarea v-model="action" rows="5" cols="33"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  </div>
</template>

<style scoped>
.preference {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: .5rem;
}
</style>