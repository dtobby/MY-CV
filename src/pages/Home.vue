<template>
  <!-- Made padding responsive and added max-width container -->
  <div class="p-4 md:p-8 lg:p-20 max-w-7xl mx-auto space-y-4 md:space-y-6">
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-cyan-600 text-center">Project History</h1>

    <!-- First Row of Projects - Made cards responsive -->
    <div class="flex flex-wrap justify-center gap-3 md:gap-4">
      <div
        v-for="(project,) in projects.slice(0, 5)"
        :key="project.id"
        class="relative group overflow-hidden rounded-lg shadow-lg w-full sm:w-72 md:w-80 h-72 md:h-80 flex-shrink-0 border-4 border-cyan-600 bg-transparent"
      >
        <!-- Adjusted image container for better mobile display -->
        <div class="flex items-center justify-center h-full p-2 md:p-0">
          <img :src="project.image" alt="Project Thumbnail" class="h-32 md:h-40 object-cover rounded-lg">
        </div>

        <!-- Made overlay text responsive -->
        <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 class="text-lg md:text-xl font-bold text-white px-2 text-center">{{ project.title }}</h2>
          <p class="text-gray-200 text-sm md:text-base">{{ project.company }}</p>
          <p class="text-gray-200 text-sm md:text-base">{{ project.date }}</p>
          <!-- Updated stack display -->
          <div class="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
            <span 
              v-for="tech in project.stack" 
              :key="tech" 
              class="bg-cyan-600 text-white px-2 py-0.5 rounded-full text-sm md:text-base"
            >
              {{ tech }}
            </span>
          </div>
          <button @click="openDialog(project)" class="mt-4 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm md:text-base">
            View
          </button>
        </div>
      </div>
    </div>

    <!-- Additional Projects Row - Same responsive treatment -->
    <div v-if="projects.length > 5" class="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6">
      <div
        v-for="(project, ) in projects.slice(5)"
        :key="project.id"
        class="relative group overflow-hidden rounded-lg shadow-lg w-full sm:w-72 md:w-80 h-72 md:h-80 flex-shrink-0 border-4 border-cyan-600 bg-transparent"
      >
        <div class="flex items-center justify-center h-full p-2 md:p-0">
          <img :src="project.image" alt="Project Thumbnail" class="h-32 md:h-40 object-cover rounded-lg">
        </div>

        <div class="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 class="text-lg md:text-xl font-bold text-white px-2 text-center">{{ project.title }}</h2>
          <p class="text-gray-200 text-sm md:text-base">{{ project.company }}</p>
          <p class="text-gray-200 text-sm md:text-base">{{ project.date }}</p>
          <!-- Updated stack display -->
          <div class="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
            <span 
              v-for="tech in project.stack" 
              :key="tech" 
              class="bg-cyan-600 text-white  px-2 py-0.5 rounded-full text-xs md:text-base"
            >
              {{ tech }}
            </span>
          </div>
          <button @click="openDialog(project)" class="mt-4 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm md:text-base">
            View
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Dialog - Made responsive -->
    <div v-if="showDialog" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-8">
      <div class="bg-gray-800 p-4 md:p-6 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-lg relative border-4 border-cyan-600">
        <!-- Adjusted close button positioning -->
        <button @click="closeDialog" class="absolute top-2 right-3 md:top-4 md:right-6 text-cyan-500 hover:text-gray-600 text-xl">
          <strong>X</strong>
        </button>

        <h1 class="text-xl md:text-2xl font-bold text-white mb-2">{{ selectedProject.title }}</h1>
        <img :src="selectedProject.project_image" class="w-full h-auto object-cover rounded-lg mb-4 border-2 border-cyan-600" alt="Project Image" />
        
        <!-- Made text responsive -->
        <p class="text-white text-sm md:text-lg"><strong>Company:</strong> {{ selectedProject.company }}</p>
        <p class="mt-4 text-white text-sm md:text-lg" v-html="formattedDescription(selectedProject.description)"></p>
        <p class="text-white text-sm md:text-lg"><strong>Start Date:</strong> {{ selectedProject.startDate }}</p>
        <p class="text-white text-sm md:text-lg"><strong>End Date:</strong> {{ selectedProject.endDate }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Role:</strong> {{ selectedProject.role }}</p>

        <p class="mt-4 text-white text-sm md:text-lg"><strong>Challenges:</strong></p>
        <p class="text-white text-sm md:text-lg">{{ selectedProject.challenges }}</p>

        <p class="mt-4 text-white text-sm md:text-lg"><strong>Solutions:</strong></p>
        <p class="text-white text-sm md:text-lg">{{ selectedProject.solutions }}</p>

        <p class="mt-4 text-white text-sm md:text-lg"><strong>Tech Stack:</strong></p>
        <!-- Updated stack display in modal -->
        <div class="flex flex-wrap gap-2 mt-2">
          <span 
            v-for="(tech, index) in selectedProject.stack" 
            :key="index"
            class="bg-cyan-600 text-white  px-3 py-1 rounded-full text-sm md:text-base hover:bg-cyan-700 transition-colors"
          >
            {{ tech }}
          </span>
        </div>

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
          description: `A project focused on UX/UI design for a mobile app.`,
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
          solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
          image: require('@/assets/savethechildern.png'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Vue", "Googlesheet", "Firebase"]
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
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
          image: require('@/assets/savethechildern.png'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Vue", "Tailwind"]
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
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
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
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
          image: require('@/assets/Tshongkha.jpg'),
          project_image: require('@/assets/Prep.png'), 
          stack: ["Python", "Odoo"]
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
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
          image: require('@/assets/k.png'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Python", "Odoo"]
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
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
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
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
          image: require('@/assets/DSP.jpeg'), 
          project_image: require('@/assets/facerecogniton.png'), 
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
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
          project_image: require('@/assets/Prep.png'),
          stack: ["Pandas", "webscraping", "Html", "Bootrap"] 
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
/* Scoped styles if needed */
</style>
