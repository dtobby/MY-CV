<template>
    <nav class="bg-gray-800 text-white p-4">
      <div class="max-w-6xl mx-auto">
        <!-- Centered Menu Items -->
        <ul class="flex justify-center space-x-6 items-center">
          <li>
            <router-link
              to="/home"
              class="px-4 py-2 rounded-[12px] transition-colors duration-300"
              active-class="bg-cyan-600 text-white"
              exact
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/skills"
              class="px-4 py-2 rounded-[12px] transition-colors duration-300"
              active-class="bg-cyan-600 text-white"
            >
              Skills
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="px-4 py-2 rounded-[12px] transition-colors duration-300"
              active-class="bg-cyan-600 text-white"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/achievements"
              class="px-4 py-2 rounded-[12px] transition-colors duration-300"
              active-class="bg-cyan-600 text-white"
            >
              Achievements
            </router-link>
          </li>
  
          <!-- Dropdown Menu for Downloads -->
          <li class="relative group">
            <button
              class="px-4 py-2 rounded-[12px] transition-colors duration-300"
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
  };
  </script>
  
  <style scoped>
  /* Optional: Add smooth scroll behavior for all anchor links */
  html {
    scroll-behavior: smooth;
  }
  </style>
  