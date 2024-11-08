<template>
  <div id="app">
    <MyNavbar />
    <router-view />
  </div>
</template>

<script>
import MyNavbar from "./components/Navbar.vue";

export default {
  components: {
    MyNavbar,
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  min-height: 100vh;
  background-image: url('@/assets/bg3.jpg'); /* Ensure correct path to bg3.jpg */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Keeps the background fixed on larger screens */
  display: flex;
  flex-direction: column;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  #app {
    background-attachment: scroll; /* Allows scrolling on smaller screens */
    background-size: contain; /* Adjust size for mobile */
  }
}
</style>
