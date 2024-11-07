<template>
    <nav class="bg-transparent text-white p-4 fixed top-0 left-0 w-full z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Centered Menu Items -->
        <ul class="flex justify-center space-x-6 items-center">
          <li>
            <router-link
              to="/home"
              :class="['px-4 py-2 rounded-[12px]', activeLink === 'home' ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-600 hover:text-white']"
              class="transition-colors duration-300"
              @click="setActiveLink('home')"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/skills"
              :class="['px-4 py-2 rounded-[12px]', activeLink === 'skills' ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-600 hover:text-white']"
              class="transition-colors duration-300"
              @click="setActiveLink('skills')"
            >
              Skills
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              :class="['px-4 py-2 rounded-[12px]', activeLink === 'about' ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-600 hover:text-white']"
              class="transition-colors duration-300"
              @click="setActiveLink('about')"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/achievements"
              :class="['px-4 py-2 rounded-[12px]', activeLink === 'achievements' ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-600 hover:text-white']"
              class="transition-colors duration-300"
              @click="setActiveLink('achievements')"
            >
              Achievements
            </router-link>
          </li>
  
          <!-- Dropdown Menu for Downloads -->
          <li class="relative group">
            <button
              :class="activeLink === 'download' ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-600 hover:text-white'"
              class="px-4 py-2 rounded-[12px] transition-colors duration-300"
              @click="setActiveLink('download')"
            >
              Download
            </button>
            <ul class="absolute hidden group-hover:block bg-gray-700 text-white rounded-md mt-1" style="min-width: 150px">
              <li>
                <router-link to="/resume" class="block px-4 py-2 hover:bg-cyan-600 rounded-[12px]">Resume</router-link>
              </li>
              <li>
                <router-link to="/certificates" class="block px-4 py-2 hover:bg-cyan-600 rounded-[12px]">Certificates</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "MyNavbar",
    data() {
      return {
        activeLink: 'landing', // Set the default active link
      };
    },
    methods: {
      setActiveLink(link) {
        this.activeLink = link;
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    background-color: transparent !important; /* Make navbar transparent */
    box-shadow: none; /* Remove any shadow to keep it clean */
    transition: background-color 0.3s ease; /* Add smooth transition effect */
  }
  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  /* Optional: Set a higher z-index so the navbar stays on top */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  </style>
  