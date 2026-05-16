<template>
  <div id="app">
    <div class="orb orb-cyan"></div>
    <div class="orb orb-purple"></div>
    <div class="grid-overlay"></div>
    <div class="content-container">
      <MyNavbar />
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import MyNavbar from "./components/Navbar.vue";
export default {
  name: 'App',
  components: { MyNavbar },
};
</script>

<style scoped>
#app {
  min-height: 100vh;
  background-color: #060d1f;
  position: relative;
  overflow-x: hidden;
}

.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
  animation: drift 28s ease-in-out infinite;
}

.orb-cyan {
  width: 800px;
  height: 800px;
  background: rgba(6, 182, 212, 0.13);
  top: -250px;
  right: -200px;
}

.orb-purple {
  width: 600px;
  height: 600px;
  background: rgba(139, 92, 246, 0.10);
  bottom: -150px;
  left: -200px;
  animation-delay: -14s;
  animation-direction: reverse;
}

.grid-overlay {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
  z-index: 0;
}

.content-container {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(40px, -30px) scale(1.06); }
  66%       { transform: translate(-25px, 40px) scale(0.94); }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
