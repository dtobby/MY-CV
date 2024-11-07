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
        { title: "Completed Vue.js Course", description: "Completed an advanced Vue.js course...", date: "Jan 2023" },
        { title: "Launched My Portfolio Website", description: "Built and launched my personal portfolio...", date: "Mar 2023" },
        { title: "Contributed to Open-Source Project", description: "Contributed bug fixes and features to...", date: "Jul 2023" },
        { title: "Published My First Blog Post", description: "Published a blog post about modern web...", date: "Oct 2023" },
        { title: "Completed Node.js Backend Project", description: "Developed a backend for a web application...", date: "Dec 2023" }
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
