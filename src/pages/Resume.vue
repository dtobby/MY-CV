<template>
  <div class="bg-gray-900 text-white font-sans">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center min-h-screen text-center p-8 space-y-6">
      <h1 class="text-5xl md:text-6xl font-bold text-cyan-500">Hello, I'm [Your Name]</h1>
      <p class="text-xl md:text-2xl text-gray-300 max-w-2xl">
        I'm a passionate frontend developer specializing in building beautiful, user-friendly web experiences with Vue.js and Tailwind CSS.
      </p>
      <button class="px-6 py-3 mt-6 bg-cyan-500 rounded-lg text-gray-900 font-semibold hover:bg-cyan-400 transition">
        View My Work
      </button>
    </section>

    <!-- About Section -->
    <section id="about" class="max-w-4xl mx-auto p-8 space-y-6">
      <h2 class="text-3xl font-semibold text-cyan-500">About Me</h2>
      <p class="text-gray-300 leading-relaxed">
        I am a frontend developer with experience in creating web applications that are both visually appealing and highly functional. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
      </p>
      <p class="text-gray-300 leading-relaxed">
        Skilled in Vue.js, Tailwind CSS, and modern frontend development techniques, I aim to bring creative ideas to life with clean code and engaging user experiences.
      </p>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-gray-800 p-8 space-y-6">
      <h2 class="text-3xl font-semibold text-center text-cyan-500">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div v-for="(project, index) in projects" :key="index" class="p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-cyan-400">{{ project.title }}</h3>
          <p class="text-gray-300 mt-2">{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="text-cyan-500 mt-4 inline-block hover:text-cyan-400">View Project</a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="p-8 bg-gray-900 text-center space-y-4">
      <h2 class="text-3xl font-semibold text-cyan-500">Get In Touch</h2>
      <p class="text-gray-300 max-w-xl mx-auto">
        If you’re interested in working together or just want to say hi, feel free to reach out!
      </p>
      <a href="mailto:your.email@example.com" class="px-6 py-3 bg-cyan-500 rounded-lg text-gray-900 font-semibold hover:bg-cyan-400 transition">
        Contact Me
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
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
