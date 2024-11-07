<template>
    <div class="bg-gray-900 text-white font-sans">
      <!-- Hero Section -->
      <section class="flex flex-col items-center justify-center min-h-screen text-center p-8 space-y-6">
        <h1 class="text-5xl md:text-6xl font-bold text-cyan-500">Hello, I'm Sonam Tobgay</h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl">
            I’m a driven developer with a solid foundation in both frontend and backend technologies, dedicated to continuous growth and creating impactful digital experiences. My current journey includes actively learning DevOps to streamline development workflows and enhance system reliability, complementing my existing skills.

<br>I’m also passionate about advancing in both full-stack development and cybersecurity, with a focus on networking and securing digital environments. This combination of skills and interests enables me to approach projects from multiple perspectives, ensuring that the solutions I build are user-friendly, secure, and resilient.
        </p>
        <router-link to="/home">
  <button class="px-6 py-3 mt-6 bg-cyan-500 rounded-lg text-gray-900 font-semibold hover:bg-cyan-400 transition">
    View My Work
  </button>
</router-link>

      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
    methods: {
    goToHome() {
      this.$router.push('/home');
    },
  },
    data() {
      return {
        projects: [
          { title: "Project One", description: "Description of the project goes here.", link: "#" },
          { title: "Project Two", description: "Description of the project goes here.", link: "#" },
          // Add more projects as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  