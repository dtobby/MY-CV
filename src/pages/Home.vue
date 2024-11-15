<template>
  <div class="p-4 md:p-8 lg:p-20 max-w-7xl mx-auto space-y-4 md:space-y-6">
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-cyan-600 text-center">Project History</h1>

    <!-- Project Cards Row -->
    <div v-for="(chunk, index) in projectChunks" :key="index" class="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
      <div
        v-for="(project) in chunk"
        :key="project.id"
        class="relative group overflow-hidden rounded-lg shadow-lg w-full sm:w-72 md:w-80 h-72 md:h-80 flex-shrink-0 border-4 border-cyan-600 bg-transparent"
      >
        <div class="flex items-center justify-center h-full p-2 md:p-0">
          <img :src="project.image" alt="Project Thumbnail" class="h-32 md:h-40 object-cover rounded-lg">
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 class="text-lg md:text-xl font-bold text-white px-2 text-center">{{ project.title }}</h2>
          <p class="text-gray-200 text-sm md:text-base">{{ project.company }}</p>
          <p class="text-gray-200 text-sm md:text-base">{{ project.date }}</p>
          <div class="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
            <span v-for="tech in project.stack" :key="tech" class="bg-cyan-600 text-white px-2 py-0.5 rounded-full text-sm md:text-base">
              {{ tech }}
            </span>
          </div>
          <button @click="openDialog(project)" class="mt-4 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm md:text-base">
            View
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Dialog -->
    <div v-if="showDialog" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-8">
      <div class="bg-gray-800 p-4 md:p-6 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-lg relative border-4 border-cyan-600">
        <button @click="closeDialog" class="absolute top-2 right-3 md:top-4 md:right-6 text-cyan-500 hover:text-gray-600 text-xl">
          <strong>X</strong>
        </button>

        <h1 class="text-xl md:text-2xl font-bold text-white mb-2">{{ selectedProject.title }}</h1>
        <img :src="selectedProject.project_image" class="w-full h-auto object-cover rounded-lg mb-4 border-2 border-cyan-600" alt="Project Image" />
        <p class="text-white text-sm md:text-lg"><strong>Company:</strong> {{ selectedProject.company }}</p>
        <p class="mt-4 text-white text-sm md:text-lg" v-html="formattedDescription(selectedProject.description)"></p>
        <p class="text-white text-sm md:text-lg"><strong>Date:</strong> {{ selectedProject.date }}</p>
        
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Role:</strong> {{ selectedProject.role }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Challenges:</strong></p>
        <p class="text-white text-sm md:text-lg">{{ selectedProject.challenges }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Solutions:</strong></p>
        <p class="text-white text-sm md:text-lg">{{ selectedProject.solutions }}</p>
        <p class="mt-4 text-white text-sm md:text-lg"><strong>Tech Stack:</strong></p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="(tech, index) in selectedProject.stack" :key="index" class="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm md:text-base hover:bg-cyan-700 transition-colors">
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
          id: 1, title: "PrEP", company: "Save The Childern, NACP", date: "Sept 2024 - Nov 2024",   role: "Programmer", description: `A project focused on Forms data storing in Google sheet  and data fetching for tracking and visulaization in dashboard. Making also user interface for clients`, 
          challenges: "The challenge was updating result result of the clients, and auto fecthing data in consolidated data", 
          solutions: "Kept different table for updating test result and then by tracking through UID made possible for  passing data in consolidate date, which applys same for automation tracking by UID and picking require filed for consolidated data",
          image: require('@/assets/savethechildern.png'), project_image: require('@/assets/Prep.png'), stack: ["Vue", "Googlesheet", "Firebase"]
        },
        { 
          id: 2, title: "DrukCLM", company: "Save the Childern", date: "June 2024 - Aug 2024",  role: "Frontend Developer", description: `A project focused on UX/UI design and data passing for a web appiclation.`,
          challenges: "The challenge was passing data through filtered year to all the component", 
          solutions: " By adding watcher and reactive  in the script and store data in pinia and by using Props and inject methond it help to pass filtered data to all the component",
          image: require('@/assets/savethechildern.png'), project_image: require('@/assets/Prep.png'), stack: ["Vue", "Tailwind"]
        },
        { 
          id: 3, 
          title: "The Pema Secretarie", 
          company: "Company Y",
          date: "Aug 2023 - Sept 2024", 
           
          role: "Fontend", 
          description: `A project focused on Data passing for a web appiclation..
          - Designed user interfaces.
          - Conducted user testing.`,
          challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
    solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
          image: require('@/assets/ThePema.jpg'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Figma", "Vue", "JavaScript","Tailwind"]
        },
        { 
          id: 4, 
          title: " Odoo For Tshongkha", 
          company: "Tshongkha Hatil showroom",
          date: "july 2023 - Aug 2024", 
           
          role: "Developer", 
          description: `A project focused on 
          - customization based on clients requirements.
          - Purchase , sales , inventory, Hr, paroll and accounting .
          - Conducted user testing.`,
          challenges: "The challenge was to implment product varaints price configurartion for indiviadual having both for mater product and product variants",
    solutions: "By Understaning Master product field, inhereinting custiomized field for both fileds cross checking the updates and data fecthing in purcahse and sales model. ",
          image: require('@/assets/Tshongkha.jpg'),
          project_image: require('@/assets/Prep.png'), 
          stack: ["Python", "Odoo"]
        },
        { 
          id: 5, 
          title: " Odoo For Kuenjom", 
          company: "Kuenjom Private Limted",
          date: "Dec 2022 - Mar 2023", 
           
          role: "Developer", 
          description: `A project focused on manufacture.
          - configuration for resource like raw materials.
          -  Purchase , sales , inventory, Hr, paroll and accounting ..
          - Conducted user testing.`,
          challenges: "The challenge was configuation and mapping its  resources for each manuafacturing stage",
    solutions: "By understanding the flow of manufacturing process and we could break the manufacture stage and configurate ecah resources convesion to each stage that could give accurate data for using ecah resource while coverting in final products",
          image: require('@/assets/k.png'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Python", "Odoo"]
        },
        { 
          id: 6, 
          title: "Samrt Parking APP", 
          company: "Desung",
          date: "Aug 2022 - Feb 2023", 
           
          role: "Data Science and UI/UX", 
          description: `A project focused on modal training and designed user interfaces.`,
          challenges: "data accuracy on model training on number plate detection",
    solutions: "It was conclued for data accuracy  of 60% due to lack of  resource and data and large model traing not train and hence we wnet with nexr appoarch with QR method for the project",
          image: require('@/assets/DSP.jpeg'), 
          project_image: require('@/assets/Prep.png'),
          stack: ["Figma", "React", "JavaScript"]
        },
        { 
          id: 7, 
          title: "Face Recognition", 
          company: "None",
          date: "Apr 2023 - Apr 2023", 
           
          role: "Developer", 
          description: ' Data analysis',
          challenges: "",
    solutions: "",
          image: require('@/assets/DSP.jpeg'), 
          project_image: require('@/assets/facerecogniton.png'), 
          stack: ["MachineLearning", "Python", "JavaScript"]
        },
        { 
          id: 8, 
          title: "Data Anlytics", 
          company: "Small Projects", 
          date: "sept 2021 - Mar 2022", 
           
          role: "Data Anlyst", 
          description: 'Done mulitiple projects on stock Price prediction, Housing analtyics of America houshols on IMD data sets, Job opportunities in bhutan using web scraping for analysis',
          image: require('@/assets/Desung.jpeg'), 
          challenges: "",
    solutions: "",
          project_image: require('@/assets/Prep.png'),
          stack: ["Pandas", "webscraping", "Html", "Bootstrap",'Python'] 
        },
      ],
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
