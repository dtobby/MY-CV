<template>
  <div class="p-20 space-y-12">
    <!-- Profile Header -->
    <div class="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6">
      <img
        class="w-40 h-40 rounded-full border-4 border-cyan-600"
        :src="profile.picture"
        alt="Profile Picture"
      />
      <h1 class="text-4xl font-bold text-cyan-600">{{ profile.name }}</h1>
      <p class="text-lg text-gray-300">{{ profile.profession }}</p>
      <p class="text-sm text-gray-400 max-w-lg text-center">{{ profile.about }}</p>
    </div>

    <!-- Contact Section -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60">
      <h2 class="text-3xl font-semibold text-cyan-600">Contact Details</h2>
      <ul class="space-y-3 mt-3">
        <li><strong>Email:</strong> <span class="text-gray-300">{{ profile.contact.email }}</span></li>
        <li><strong>Phone:</strong> <span class="text-gray-300">{{ profile.contact.phone }}</span></li>
        <li><strong>GitHub:</strong> 
          <a :href="profile.contact.github" class="text-cyan-600 hover:underline">{{ profile.contact.github }}</a>
        </li>
      </ul>
    </div>

    <!-- Education Section -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60">
      <h2 class="text-3xl font-semibold text-cyan-600">Education</h2>
      <ul class="space-y-3 mt-3">
        <li><strong>{{ profile.education.degree }}</strong> - {{ profile.education.university }} ({{ profile.education.year }})</li>
      </ul>
    </div>

    <!-- Hobbies Section -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60">
      <h2 class="text-3xl font-semibold text-cyan-600">Hobbies</h2>
      <ul class="space-y-3 mt-3">
        <li v-for="(hobby, index) in profile.hobbies" :key="index" class="text-gray-300">- {{ hobby }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      profile: {
        name: "Sonam Tobgay",
        profession: "Developer",
        about: "An innovative and detail-oriented developer with 5+ years of experience in building web and mobile applications. Passionate about technology and problem-solving.",
        picture: require('@/assets/logo.png'), // Replace with your actual image path
        contact: {
          email: "john.doe@example.com",
          phone: "+123 456 7890",
          github: "https://github.com/johndoe"
        },
        education: {
          degree: "Bachelor of Science in Computer Science",
          university: "ABC University",
          year: "2020"
        },
        hobbies: ["Coding", "Photography", "Travelling", "Reading", "Gaming"]
      }
    };
  }
};
</script>

<style scoped>
/* Custom styling for modern profile card */
.card-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
