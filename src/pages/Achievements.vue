<template>
  <div class="p-20 space-y-12">
    <h1 class="text-4xl font-bold text-cyan-500 text-center">Achievements</h1>

    <!-- Timeline Container -->
    <div class="relative border-l-4 border-cyan-500 mx-auto space-y-12 max-w-2xl">
      <!-- Achievements (Vertical Layout) -->
      <div v-for="(achievement, index) in achievements" :key="index" class="relative flex items-center">
        <!-- Timeline Marker (Circle) -->
        <div class="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2.5 z-10"></div>

        <!-- Achievement Card -->
        <div class="ml-8 p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white max-w-xl">
          <div class="text-xs text-gray-400">{{ achievement.date }}</div>
          <h3 class="font-semibold text-lg text-cyan-400">{{ achievement.title }}</h3>
          <p class="text-gray-300">{{ achievement.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementsPage",
  data() {
    return {
      achievements: [
        {
          title: "Delivered Playbt Platform",
          description: "Led cross-functional development of a real-time full-stack web platform and mobile application using Phoenix, PostgreSQL, and a monorepo architecture, while enforcing code quality through reviews and strong testing practices.",
          date: "Mar 2026"
        },
        {
          title: "Built Government Certification Modules",
          description: "Owned and delivered the ECPF and Accreditation modules for Bhutan Qualification and Professional Certification Authority, including frontend interfaces, API design, dashboards, and end-to-end testing.",
          date: "Feb 2025"
        },
        {
          title: "Deployed Evaluation Association Platform",
          description: "Managed the full delivery lifecycle of a Vue.js and Django REST application for the Evaluation Association of Bhutan, including PostgreSQL schema design, dashboard features, and production deployment.",
          date: "Apr 2025"
        },
        {
          title: "IBM Data Analyst Track Projects",
          description: "Completed applied analytics and machine learning projects covering used car price prediction, stock time-series analysis, rental price modelling, web scraping of Bhutan job data, and an NLP chatbot prototype.",
          date: "Mar 2022"
        },
        {
          title: "Desuung Service",
          description: "Served as a Desuung volunteer during the COVID-19 period, contributing to public safety, discipline, teamwork, and community support under demanding conditions.",
          date: "Mar 2020"
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Custom timeline styles */
.p-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.space-y-12 > :not(:last-child) {
  margin-bottom: 3rem;
}

.text-cyan-500 {
  color: #06b6d4;
}

.bg-gray-900 {
  background-color: #1f2937;
}

.bg-gray-800 {
  background-color: #2d3748;
}

.border-cyan-500 {
  border-color: #06b6d4;
}

.transition-all {
  transition: all 0.3s ease;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
