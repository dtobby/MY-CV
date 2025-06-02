<template>
  <div class="p-20 space-y-6">
    <h1 class="text-4xl font-bold mb-4 text-cyan-600 text-center">Skills</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Skill Cards -->
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60"
      >
        <!-- Skill Logo -->
        <img :src="skill.logo" alt="Tech Logo" class="w-16 h-16 mb-4" />

        <!-- Skill Name -->
        <h2 class="text-xl font-bold mb-2">{{ skill.name }}</h2>

        <!-- Progress Bar -->
        <div class="w-full bg-gray-600 rounded-full h-2 mb-4">
          <div
            :style="{ width: skill.rating * 10 + '%' }"
            class="bg-cyan-600 h-full rounded-full"
          ></div>
        </div>
        
        <!-- Rating -->
        <p class="text-sm text-gray-300">{{ skill.rating }} / 10</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsPage",
  data() {
    return {
      skills: [
        {
          name: "Next.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
          rating: 5
        },
        {
          name: "Phoenix",
          logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/254_Phoenix_Framework_logo-512.png",
          rating: 5
        },
        {
          name: "Elixir",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Official_Elixir_logo.png",
          rating: 5
        },
        {
          name: "HTML",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
          rating: 9
        },
        {
          name: "CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
          rating: 8
        },
        {
          name: "Tailwind",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          rating: 8
        },
        {
          name: "Bootstrap",
          logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
          rating: 7
        },
        {
          name: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          rating: 8
        },
        {
          name: "Vue.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
          rating: 9
        },
        {
          name: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          rating: 5
        },
        {
          name: "Node.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
          rating: 3
        },
        {
          name: "Git",
          logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
          rating: 7
        },
        {
          name: "Figma",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
          rating: 7
        },
        {
          name: "Django",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIut2a3wq842_Ci2QPLL1x63ncLaeGMe-GUO03D7-hy1HEygXBlDqNC0bVf4MSIHWil8&usqp=CAU",
          rating: 6
        },
        {
          name: "Google Sheets",
          logo: "https://qualitytraining.be/content/uploads/2022/07/formation-google-sheet-belgique.png",
          rating: 8
        },
        {
          name: "Python",
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
          rating: 6
        },
        {
          name: "Data Analytics",
          logo: "https://media.istockphoto.com/id/1257312690/vector/analytics-bar-graph-icon.jpg?s=612x612&w=0&k=20&c=3u12q178en00xfxgjwz3xRaTGwrGmWFRdDc3HbJOGHw=",
          rating: 9
        },
        {
          name: "SAP",
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
          rating: 6
        },
        {
          name: "Odoo",
          logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKHkAoDyKm-BSvZIdmOdmgSkEaRi-1H8Kaw&s",
          rating: 8
        },
        {
          name: "SQL",
          logo: "https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png",
          rating: 7
        },
      ]
    };
  }
};
</script>

<style scoped>
/* Optional: Custom styles for skill cards */
</style>
