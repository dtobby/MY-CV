<template>
    <div class="p-8 space-y-6">
      <h1 class="text-3xl font-bold mb-4">Project History</h1>
  
      <!-- Project Cards (showing up to 5 in a horizontal row) -->
      <div class="flex overflow-x-auto space-x-4">
        <div
  v-for="(project,) in projects.slice(0, 5)"
  :key="project.id"
  :class="['relative group overflow-hidden rounded-lg shadow-lg flex-shrink-0 w-64', 'bg-cover bg-center h-64']"
  :style="{ backgroundImage: `url(${project.image})` }"
>
          <!-- Overlay on hover -->
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 class="text-white text-xl font-bold">{{ project.title }}</h2>
            <p class="text-gray-200">{{ project.date }}</p>
            <button @click="openDialog(project)" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
          </div>
        </div>
      </div>
  
      <!-- Modal Dialog -->
      <div v-if="showDialog" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
          <button @click="closeDialog" class="absolute top-2 right-2 text-gray-400 hover:text-gray-600">✕</button>
          <h2 class="text-2xl font-bold mb-2">{{ selectedProject.title }}</h2>
          <p class="text-gray-600">Start Date: {{ selectedProject.startDate }}</p>
          <p class="text-gray-600">End Date: {{ selectedProject.endDate }}</p>
          <p class="mt-4 text-gray-800"><strong>Role:</strong> {{ selectedProject.role }}</p>
          <p class="mt-2 text-gray-800">{{ selectedProject.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage", // Ensure it's a multi-word name
    data() {
      return {
        projects: [
          { id: 1, title: "Project A", date: "Jan 2021 - Mar 2021", startDate: "Jan 2021", endDate: "Mar 2021", role: "Developer", description: "A project about building a responsive web application.", image: "https://via.placeholder.com/300x200" },
          { id: 2, title: "Project B", date: "Apr 2021 - Jul 2021", startDate: "Apr 2021", endDate: "Jul 2021", role: "Designer", description: "A project focused on UX/UI design for a mobile app.", image: "https://via.placeholder.com/300x200" },
          { id: 3, title: "Project C", date: "Aug 2021 - Dec 2021", startDate: "Aug 2021", endDate: "Dec 2021", role: "Lead", description: "Project management for a large scale application.", image: "https://via.placeholder.com/300x200" },
          { id: 4, title: "Project D", date: "Jan 2022 - Mar 2022", startDate: "Jan 2022", endDate: "Mar 2022", role: "Tester", description: "Quality assurance for a web-based platform.", image: "https://via.placeholder.com/300x200" },
          { id: 5, title: "Project E", date: "Apr 2022 - Jul 2022", startDate: "Apr 2022", endDate: "Jul 2022", role: "Consultant", description: "Consulting on frontend architecture and design.", image: "https://via.placeholder.com/300x200" },
          { id: 6, title: "Project F", date: "Aug 2022 - Present", startDate: "Aug 2022", endDate: "Present", role: "Architect", description: "Leading the architectural design for a scalable app.", image: "https://via.placeholder.com/300x200" },
        ],
        showDialog: false,
        selectedProject: null,
      };
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
    },
  };
  </script>
  