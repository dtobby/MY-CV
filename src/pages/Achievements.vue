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
    title: "Data Analytics",
    description: "Successfully completed intensive data analytics training, mastering key tools and techniques including data visualization, statistical analysis, and predictive modeling. Transformed my passion into practical expertise through hands-on projects and real-world applications, strengthening my analytical thinking and problem-solving capabilities.",
    date: "Jul 2023"
},
{
    title: "Desuung Training",
    description: "Proudly served as a Desuung (Guardian of Peace) volunteer during the COVID-19 pandemic, contributing to national security and public welfare for over one year. Participated in crucial activities including border control management, public safety initiatives, and community support programs. Developed strong leadership, teamwork, and crisis management skills while serving the nation.",
    date: "March 2020"
},
{
    title: "Sherubtse Student Leadership Programme",
    description: "Participated in an intensive month-long leadership development program at Sherubtse College. Enhanced core leadership competencies including strategic thinking, effective communication, team management, and conflict resolution. Engaged in workshops, group projects, and practical exercises designed to foster leadership excellence and personal growth.",
    date: "April 2018"
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
