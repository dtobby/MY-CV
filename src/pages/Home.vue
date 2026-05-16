<template>
  <div class="p-4 md:p-8 lg:p-20 max-w-7xl mx-auto space-y-4 md:space-y-6">
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-cyan-600 text-center">Project History</h1>

    <div v-for="(chunk, index) in projectChunks" :key="index" class="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
      <div v-for="project in chunk" :key="project.id"
        class="relative group overflow-hidden rounded-lg shadow-lg w-1/2 sm:w-72 md:w-80 h-72 md:h-80 flex-shrink-0 border-4 border-cyan-600 bg-transparent">
        <div class="flex items-center justify-center h-full p-2 md:p-0">
          <img :src="project.image" :alt="project.title" loading="lazy" class="h-32 md:h-40 object-cover rounded-lg" />
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 class="text-lg md:text-xl font-bold text-white px-2 text-center">{{ project.title }}</h2>
          <p class="text-gray-200 text-sm md:text-base">{{ project.company }}</p>
          <p class="text-gray-200 text-sm md:text-base">{{ project.date }}</p>
          <div class="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
            <span v-for="tech in project.stack" :key="tech"
              class="bg-cyan-600 text-white px-2 py-0.5 rounded-full text-sm md:text-base">{{ tech }}</span>
          </div>
          <button @click="openDialog(project)"
            class="mt-4 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm md:text-base">
            View
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showDialog"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-8"
      @click.self="closeDialog">
      <div class="bg-gray-800 p-4 md:p-6 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-lg relative border-4 border-cyan-600">
        <button @click="closeDialog" aria-label="Close dialog"
          class="absolute top-2 right-3 md:top-4 md:right-6 text-cyan-500 hover:text-gray-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h1 class="text-xl md:text-2xl font-bold text-white mb-2">{{ selectedProject.title }}</h1>
        <img :src="selectedProject.project_image" loading="lazy"
          class="w-full h-auto object-cover rounded-lg mb-4 border-2 border-cyan-600" :alt="selectedProject.title" />
        <p class="text-white text-sm md:text-lg"><strong>Company:</strong> {{ selectedProject.company }}</p>

        <div class="mt-4 text-sm md:text-lg">
          <p v-for="(line, i) in parsedDescription(selectedProject.description)" :key="i"
            :class="['text-white', line.isBullet ? 'flex gap-2 ml-2' : 'mb-1']">
            <span v-if="line.isBullet" class="text-cyan-400 flex-shrink-0">•</span>
            <span>{{ line.text }}</span>
          </p>
        </div>

        <p class="text-white text-sm md:text-lg"><strong>Date:</strong> {{ selectedProject.date }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Role:</strong> {{ selectedProject.role }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Challenges:</strong></p>
        <p class="text-white text-sm md:text-lg">{{ selectedProject.challenges }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Solutions:</strong></p>
        <p class="text-white text-sm md:text-lg">{{ selectedProject.solutions }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Tech Stack:</strong></p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="tech in selectedProject.stack" :key="tech"
            class="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm md:text-base hover:bg-cyan-700 transition-colors">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from '../data/Projects';

export default {
  name: 'HomePage',
  data() {
    return {
      projects: projectsData,
      showDialog: false,
      selectedProject: null,
    };
  },
  computed: {
    projectChunks() {
      const chunkSize = 5;
      const chunks = [];
      for (let i = 0; i < this.projects.length; i += chunkSize) {
        chunks.push(this.projects.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    openDialog(project) {
      this.selectedProject = project;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedProject = null;
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.showDialog) this.closeDialog();
    },
    parsedDescription(description) {
      return description.split('\n')
        .filter(line => line.trim())
        .map(line => ({
          isBullet: line.trim().startsWith('-'),
          text: line.trim().startsWith('-') ? line.trim().slice(1).trim() : line.trim()
        }));
    },
  },
};
</script>
