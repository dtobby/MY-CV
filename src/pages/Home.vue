<template>
  <div class="p-20 space-y-6">
    <h1 class="text-4xl font-bold mb-4 text-cyan-600 text-center">Project History</h1>

    <!-- First Row of up to 5 Project Cards -->
    <div class="flex flex-wrap justify-center gap-4">
      <div
        v-for="(project,) in projects.slice(0, 5)"
        :key="project.id"
        class="relative group overflow-hidden rounded-lg shadow-lg w-80 h-80 flex-shrink-0 border-4 border-cyan-600 bg-transparent"
      >
        <!-- Centered Image Thumbnail -->
        <div class="flex items-center justify-center h-full">
          <img :src="project.image" alt="Project Thumbnail" class="h-40 object-cover rounded-lg">
        </div>

        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 class="text-white text-xl font-bold">{{ project.title }}</h2>
          <p class="text-gray-200">{{ project.company }}</p>
          <p class="text-gray-200">{{ project.date }}</p>
          <!-- Stack section visible before hover -->
          <div class="absolute bottom-2 left-2 right-2 bg-cyan-600 text-white px-2 py-1 rounded">
            <strong>Stack:</strong> {{ project.stack.join(", ") }}
          </div>
          <button @click="openDialog(project)" class="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">
            View
          </button>
        </div>
      </div>
    </div>

    <!-- Additional Projects Row -->
    <div v-if="projects.length > 5" class="flex flex-wrap justify-center gap-4 mt-6">
      <div
        v-for="(project, ) in projects.slice(5)"
        :key="project.id"
        class="relative group overflow-hidden rounded-lg shadow-lg w-80 h-80 flex-shrink-0 border-4 border-cyan-600 bg-transparent"
      >
        <!-- Centered Image Thumbnail -->
        <div class="flex items-center justify-center h-full">
          <img :src="project.image" alt="Project Thumbnail" class="h-40 object-cover rounded-lg">
        </div>

        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 class="text-white text-xl font-bold">{{ project.title }}</h2>
          <p class="text-gray-200">{{ project.company }}</p>
          <p class="text-gray-200">{{ project.date }}</p>
          <!-- Stack section visible before hover -->
          <div class="absolute bottom-2 left-2 right-2 bg-cyan-600 text-white px-2 py-1 rounded">
            <strong>Stack:</strong> {{ project.stack.join(", ") }}
          </div>
          <button @click="openDialog(project)" class="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">
            View
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Dialog -->
    <div v-if="showDialog" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-gray-800 p-6 rounded-lg max-w-6xl w-full shadow-lg relative border-4 border-cyan-600">
        <!-- Close Button -->
        <button @click="closeDialog" class="absolute top-2 right-6 text-cyan-500 hover:text-gray-600 text-xl"><strong>X</strong></button>

        <h1 class="text-2xl font-bold text-white mb-2">{{ selectedProject.title }}</h1>
        <img :src="selectedProject.project_image" class="w-full h-68 object-cover rounded-lg mb-4 border-2 border-cyan-600" alt="Project Image" />
        <p class="text-white"><strong>Company:</strong> {{ selectedProject.company }}</p>
        <p class="text-white">Start Date: {{ selectedProject.startDate }}</p>
        <p class="text-white">End Date: {{ selectedProject.endDate }}</p>
        <p class="mt-4 text-white"><strong>Role:</strong> {{ selectedProject.role }}</p>

        <!-- Stack list in modal -->
        <p class="mt-4 text-white"><strong>Tech Stack:</strong></p>
        <ul class="flex flex-wrap gap-2 mt-2">
          <li v-for="(tech, index) in selectedProject.stack" :key="index" class="px-2 py-1 bg-cyan-600 text-white rounded">
            {{ tech }}
          </li>
        </ul>

        <!-- Render Description with Bullet Points -->
        <p class="mt-4 text-white" v-html="formattedDescription(selectedProject.description)"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomePage",
  data() {
    return {
      projects: [
        { 
          id: 1, 
          title: "PrEP", 
          company: "Save The Childern, NACP",
          date: "Apr 2021 - Jul 2021", 
          startDate: "Apr 2021", 
          endDate: "Jul 2021", 
          role: "Designer", 
          description: `A project focused on UX/UI design for a mobile app.
          - Designed user interfaces.
          - Conducted user testing.`,
          image: require('@/assets/savethechildern.png'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Vue", "Googlesheet","Firebase"]
        },
        { 
          id: 2, 
          title: "DrukCLM", 
          company: "Save the Childern",
          date: "Apr 2021 - Jul 2021", 
          startDate: "Apr 2021", 
          endDate: "Jul 2021", 
          role: "Forntend Developer", 
          description: `A project focused on UX/UI design for a mobile app.
          - Designed user interfaces.
          - Conducted user testing.`,
          image: require('@/assets/savethechildern.png'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Vue, Tailwind"]
        },
        { 
          id: 3, 
          title: "The Pema Secretarie", 
          company: "Company Y",
          date: "Apr 2021 - Jul 2021", 
          startDate: "Apr 2021", 
          endDate: "Jul 2021", 
          role: "Fontent", 
          description: `A project focused on UX/UI design for a mobile app.
          - Designed user interfaces.
          - Conducted user testing.`,
          image: require('@/assets/ThePema.jpg'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Figma", "Vue", "JavaScript"]
        },
        { 
          id: 4, 
          title: " Odoo For Tshongkha", 
          company: "Tshongkha Hatil showroom",
          date: "Apr 2021 - Jul 2021", 
          startDate: "Apr 2021", 
          endDate: "Jul 2021", 
          role: "Developer", 
          description: `A project focused on UX/UI design for a mobile app.
          - Designed user interfaces.
          - Conducted user testing.`,
          image: require('@/assets/Tshongkha.jpg'),
          project_image: require('@/assets/Prep.png'), 
          stack: ["Python, Odoo"]
        },
        { 
          id: 5, 
          title: " Odoo For Kuenjom", 
          company: "Kuenjom Private Limted",
          date: "Apr 2021 - Jul 2021", 
          startDate: "Apr 2021", 
          endDate: "Jul 2021", 
          role: "Developer", 
          description: `A project focused on UX/UI design for a mobile app.
          - Designed user interfaces.
          - Conducted user testing.`,
          image: require('@/assets/Kuenjom.jpg'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Python, Odoo"]
        },
        { 
          id: 6, 
          title: "Samrt Parking APP", 
          company: "Desung",
          date: "Apr 2021 - Jul 2021", 
          startDate: "Apr 2021", 
          endDate: "Jul 2021", 
          role: "Designer", 
          description: `A project focused on UX/UI design for a mobile app.
          - Designed user interfaces.
          - Conducted user testing.`,
          image: require('@/assets/DSP.jpeg'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Figma", "React", "JavaScript"]
        },
        { 
          id: 7, 
          title: "Face Recognition", 
          company: "None",
          date: "Apr 2021 - Jul 2021", 
          startDate: "Apr 2021", 
          endDate: "Jul 2021", 
          role: "Developer", 
          description: `A project focused on UX/UI design for a mobile app.
          - Designed user interfaces.
          - Conducted user testing.`,
          image: require('@/assets/DSP.jpeg'), 
          project_image: require('@/assets/Prep.png'), 
          stack: ["MachineLearning", "Python", "JavaScript"]
        },
        { 
          id: 8, 
          title: "Data Anlytics", 
          company: "Small Project", 
          date: "Jan 2021 - Mar 2021", 
          startDate: "Jan 2021", 
          endDate: "Mar 2021", 
          role: "Data Anlyst", 
          description: `A project about building a responsive web application.
            - Developed frontend features.
            - Improved user experience.`,
          image: require('@/assets/Desung.jpeg'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Pandas", "webscraping", "Html, Bootrap"] 
        },
        
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
    formattedDescription(description) {
      return description.split('\n').map(line => {
        if (line.startsWith('-')) {
          return `<li>${line.substring(1).trim()}</li>`;
        }
        return `<p>${line}</p>`;
      }).join('');
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
