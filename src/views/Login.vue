<script setup>
import Title from '../components/LandingSub.vue'
import Auth from '@/components/Auth.vue'
import SideBar from '@/components/SideBar.vue'
</script>
<template>
  <main>
    <SideBar />
  </main>
  <div>
    <span class="wrapper">
      <Title heading="ConMon ToolKit" />
      <Title subtext="Login Using Admin Account" />
    </span>
    <div>
      <Auth />
    </div>
  </div>


</template>
<style scoped>
</style>