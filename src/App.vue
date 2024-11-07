<template>
  <div id="app" :style="backgroundStyle">
    <MyNavbar />
    <router-view />
  </div>
</template>

<script>
import MyNavbar from "./components/Navbar.vue";
import bg2 from './assets/bg3.jpg';  // Adjust the path based on where bg2 is located

export default {
  components: {
    MyNavbar,
  },
  data() {
    return {
      bg2, // This will automatically reference the image
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.bg2})`,
        backgroundSize: 'cover',         // Ensure it covers the entire viewport
        backgroundPosition: 'center',    // Position it in the center of the screen
        backgroundAttachment: 'fixed',   // Keeps the background fixed while scrolling
        height: '150vh',                 // Make sure it takes up the full height of the viewport
      };
    },
  },
};
</script>

<style scoped>
/* Optional: Ensure that the body and html also cover the entire height */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
