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
