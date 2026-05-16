<template>
  <nav class="fixed top-0 left-0 w-full z-10 bg-black/90 backdrop-blur-sm transition-all duration-500">
    <div class="text-white max-w-6xl mx-auto px-4 py-2">
      <div class="flex items-center justify-between sm:grid sm:grid-cols-3">
        <!-- Brand -->
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-cyan-500 hover:text-cyan-400 transition-colors duration-300">DTOBY</h1>
        </div>

        <!-- Hamburger (mobile) -->
        <button @click="toggleMobileMenu"
          class="sm:hidden absolute right-4 p-2 rounded-lg bg-black/90 backdrop-blur-sm hover:bg-black/80 focus:outline-none border border-gray-700/30 transition-all duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <!-- Desktop nav -->
        <div class="hidden sm:block sm:col-span-1 justify-self-center">
          <ul class="flex items-center space-x-6">
            <li v-for="link in links" :key="link.name">
              <router-link :to="link.path"
                :class="['px-4 py-2 rounded-[12px] transition-all duration-300',
                  isActive(link.path) ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Resume / Certificates dropdown -->
        <div class="hidden sm:flex justify-end">
          <div class="relative" v-if="showDropdown">
            <button @click="toggleDropdown"
              :class="['px-4 py-2 rounded-[12px] transition-all duration-300',
                isActive('/resume') || isActive('/certificates') ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']">
              Resume / Certificates
            </button>
            <ul v-if="dropdownOpen"
              class="absolute right-0 bg-gray-900/95 backdrop-blur-sm text-white rounded-md mt-1 min-w-[150px] border border-gray-700/50 shadow-lg">
              <li>
                <router-link to="/resume" @click="closeDropdown"
                  class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300">
                  Resume
                </router-link>
              </li>
              <li>
                <router-link to="/certificates" @click="closeDropdown"
                  class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300">
                  Certificates
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="showMobileMenu"
        class="sm:hidden absolute top-full left-0 w-full bg-black backdrop-blur-sm py-4 border-t border-gray-700/50">
        <ul class="flex flex-col items-center space-y-4">
          <li v-for="link in links" :key="link.name">
            <router-link :to="link.path" @click="showMobileMenu = false"
              :class="['px-4 py-2 rounded-[12px] transition-all duration-300',
                isActive(link.path) ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']">
              {{ link.name }}
            </router-link>
          </li>
          <li class="relative" v-if="showDropdown">
            <button @click="toggleDropdown"
              :class="['px-4 py-2 rounded-[12px] transition-all duration-300',
                isActive('/resume') || isActive('/certificates') ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']">
              Download
            </button>
            <ul v-if="dropdownOpen"
              class="mt-2 bg-gray-900/95 backdrop-blur-sm text-white rounded-md w-full border border-gray-700/50">
              <li>
                <router-link to="/resume" @click="closeDropdown"
                  class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300">
                  Resume
                </router-link>
              </li>
              <li>
                <router-link to="/certificates" @click="closeDropdown"
                  class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300">
                  Certificates
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
  data() {
    return {
      showMobileMenu: false,
      dropdownOpen: false,
      showDropdown: true,
      links: [
        { name: 'Home', path: '/home' },
        { name: 'Skills', path: '/skills' },
        { name: 'About', path: '/about' },
        { name: 'Achievements', path: '/achievements' },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      this.dropdownOpen = false;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
      this.showMobileMenu = false;
    },
  },
};
</script>
