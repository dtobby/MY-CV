<template>
  <div id="app">
    <div class="digital-overlay">
      <!-- Left to right streams -->
      <div v-for="i in 4" :key="`stream-right-${i}`" class="data-stream stream-right" :style="{
        top: `${i * 20 - 10}%`,
        left: 0,
        right: 0,
        animationDelay: `${i * 0.8}s`
      }">
      </div>

      <!-- Right to left streams -->
      <div v-for="i in 4" :key="`stream-left-${i}`" class="data-stream stream-left" :style="{
        top: `${i * 20}%`,
        left: 0,
        right: 0,
        animationDelay: `${i * 0.8}s`
      }">
      </div>

      <!-- Data packets -->
      <div v-for="i in 8" :key="`packet-${i}`" :class="`data-packet ${i % 2 === 0 ? 'packet-right' : 'packet-left'}`"
        :style="{
          top: `${(i * 12) + 5}%`,
          animationDelay: `${i * 0.7}s`
        }">
      </div>
    </div>
    <MyNavbar />
    <router-view />
  </div>
</template>

<script>
import MyNavbar from "./components/Navbar.vue";

export default {
  name: 'App',
  components: {
    MyNavbar,
  }
};
</script>

<style scoped>
#app {
  min-height: 100vh;
  background-image: url('@/assets/bg3.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.digital-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
  width: 100vw;
}

/* Base data streams */
.data-stream {
  position: absolute;
  width: 100vw;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      rgba(34, 211, 238, 0.1) 20%,
      rgba(34, 211, 238, 0.3) 50%,
      rgba(34, 211, 238, 0.1) 80%,
      transparent);
  opacity: 0.4;
}

.stream-right {
  animation: streamFlowRight 8s linear infinite;
}

.stream-left {
  animation: streamFlowLeft 8s linear infinite;
}

/* Data packets */
.data-packet {
  position: absolute;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg,
      transparent,
      rgba(34, 211, 238, 0.8) 20%,
      rgba(34, 211, 238, 1) 50%,
      rgba(34, 211, 238, 0.8) 80%,
      transparent);
  filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.6));
}

.packet-right {
  animation: packetFlowRight 4s linear infinite;
}

.packet-left {
  animation: packetFlowLeft 4s linear infinite;
}

/* Right to left animations */
@keyframes streamFlowLeft {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(-100vw);
  }
}

@keyframes packetFlowLeft {
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateX(-100vw);
    opacity: 0;
  }
}

/* Left to right animations */
@keyframes streamFlowRight {
  0% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(100vw);
  }
}

@keyframes packetFlowRight {
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateX(100vw);
    opacity: 0;
  }
}

/* Ensure content stays above the overlay */
MyNavbar,
router-view {
  position: relative;
  z-index: 2;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .digital-overlay {
    width: 100%;
  }

  .data-stream {
    animation-duration: 12s;
  }

  .data-packet {
    animation-duration: 8s;
  }
}
</style>