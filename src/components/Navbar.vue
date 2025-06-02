<template>
  <nav :class="['fixed top-0 left-0 w-full z-10 transition-all duration-500', 'bg-black/90 backdrop-blur-sm']">
    <div class="text-white max-w-6xl mx-auto px-4 py-2">
      <!-- Main container with three columns -->
      <div class="flex items-center justify-between sm:grid sm:grid-cols-3">
        <!-- Logo / Brand Name (Left) -->
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-cyan-500 hover:text-cyan-400 transition-colors duration-300">DTOBY</h1>
        </div>

        <!-- Hamburger Icon (visible only on small screens) -->
        <button @click="toggleMobileMenu" 
                class="sm:hidden absolute right-4 p-2 rounded-lg 
                       bg-black/90 backdrop-blur-sm
                       hover:bg-black/80 focus:outline-none
                       border border-gray-700/30
                       transition-all duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" 
               class="h-6 w-6 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" 
               fill="none" 
               viewBox="0 0 24 24" 
               stroke="currentColor">
            <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <!-- Centered Menu (hidden on mobile and shown on larger screens) -->
        <div class="hidden sm:block sm:col-span-1 justify-self-center">
          <ul class="flex items-center space-x-6">
            <li v-for="link in links" :key="link.name">
              <router-link
                :to="link.path"
                :class="['px-4 py-2 rounded-[12px] transition-all duration-300', 
                         activeLink === link.name ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']"
                @click="setActiveLink(link.name)"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Download Button (Right) -->
        <div class="hidden sm:flex justify-end">
          <div class="relative group" v-if="showDropdown">
            <button
              :class="['px-4 py-2 rounded-[12px] transition-all duration-300',
                       activeLink === 'download' ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']"
              @click="toggleDropdown"
            >
              Resume / Certificates
            </button>
            <ul v-if="dropdownOpen" 
                class="absolute right-0 bg-gray-900/95 backdrop-blur-sm text-white rounded-md mt-1 min-w-[150px] 
                       border border-gray-700/50 shadow-lg">
              <li>
                <router-link to="/resume" 
                             class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300"
                             @click="closeDropdown">
                  Resume
                </router-link>
              </li>
              <li>
                <router-link to="/certificates" 
                             class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300"
                             @click="closeDropdown">
                  Certificates
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Mobile Menu (Overlay) -->
      <div v-if="showMobileMenu" 
           class="sm:hidden absolute top-full left-0 w-full bg-black backdrop-blur-sm py-4 
                  border-t border-gray-700/50">
        <ul class="flex flex-col items-center space-y-4">
          <li v-for="link in links" :key="link.name">
            <router-link
              :to="link.path"
              :class="['px-4 py-2 rounded-[12px] transition-all duration-300',
                       activeLink === link.name ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']"
              @click="setActiveLink(link.name)"
            >
              {{ link.name }}
            </router-link>
          </li>
          <!-- Mobile Download Button -->
          <li class="relative" v-if="showDropdown">
            <button
              :class="['px-4 py-2 rounded-[12px] transition-all duration-300',
                       activeLink === 'download' ? 'bg-cyan-600/90 text-white' : 'hover:bg-cyan-600/80 hover:text-white']"
              @click="toggleDropdown"
            >
              Download
            </button>
            <ul v-if="dropdownOpen" 
                class="mt-2 bg-gray-900/95 backdrop-blur-sm text-white rounded-md w-full 
                       border border-gray-700/50">
              <li>
                <router-link to="/resume" 
                             class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300"
                             @click="closeDropdown">
                  Resume
                </router-link>
              </li>
              <li>
                <router-link to="/certificates" 
                             class="block px-4 py-2 hover:bg-cyan-600/80 rounded-[12px] transition-colors duration-300"
                             @click="closeDropdown">
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
  name: "MyNavbar",
  data() {
    return {
      activeLink: "home",
      showMobileMenu: false,
      dropdownOpen: false,
      showDropdown: true,
      links: [
        { name: "Home", path: "/home" },
        { name: "Skills", path: "/skills" },
        { name: "About", path: "/about" },
        { name: "Achievements", path: "/achievements" },
      ],
    };
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link;
      this.showMobileMenu = false;
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
    },
  },
};
</script>
