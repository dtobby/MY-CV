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

      <!-- Social Icons -->
      <div class="flex space-x-6 mt-4">
        <a
          :href="profile.contact.github"
          target="_blank"
          class="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          aria-label="GitHub Profile"
        >
          <Github class="w-6 h-6 text-gray-400 hover:text-cyan-600" />
        </a>
        
        <a
          :href="'mailto:' + profile.contact.email"
          class="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          aria-label="Send Email"
        >
          <Mail class="w-6 h-6 text-gray-400 hover:text-cyan-600" />
        </a>
        
        <a
          :href="'https://wa.me/' + profile.contact.phone.replace(/[^0-9]/g, '')"
          target="_blank"
          class="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle class="w-6 h-6 text-gray-400 hover:text-cyan-600" />
        </a>
      </div>
    </div>

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Left Column: Profile Details -->
      <div class="space-y-6">
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
            <li>
              <h2><strong>{{ profile.education.grade_or_degree }}</strong> - {{ profile.education.university_school }} ({{ profile.education.year }})</h2>
            </li>
          </ul>
        </div>

        <!-- Certifications Section -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60">
          <h2 class="text-3xl font-semibold text-cyan-600">Certifications</h2>
          <ul class="space-y-3 mt-3">
            <li v-for="(certification, index) in profile.certifications" :key="index">
              <strong>{{ certification.title }}</strong> - {{ certification.issuer }} ({{ certification.year }})
            </li>
          </ul>
        </div>

        <!-- Hobbies Section -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60">
          <h2 class="text-3xl font-semibold text-cyan-600">Hobbies & Personal Interests</h2>
          <ul class="space-y-3 mt-3">
            <li v-for="(hobby, index) in profile.hobbies" :key="index" class="text-gray-300">- {{ hobby }}</li>
          </ul>
        </div>
      </div>

      <!-- Right Column: Contact Me Form -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60">
        <h2 class="text-3xl font-semibold text-cyan-600 mb-4">Contact Me Directly</h2>

        <!-- Name -->
        <div class="mb-4">
          <label for="name" class="block text-gray-300 font-semibold mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            v-model="contactForm.name"
            class="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
            placeholder="Enter your name"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-gray-300 font-semibold mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            v-model="contactForm.email"
            class="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
            placeholder="Enter your email"
          />
        </div>

        <!-- Message Input -->
        <div class="mb-6">
          <label for="message" class="block text-gray-300 font-semibold mb-2">Your Message</label>
          <textarea
            id="message"
            v-model="contactForm.message"
            rows="5"
            class="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          @click="sendMessage"
          :disabled="loading"
          class="w-full px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? "Sending..." : "Send Message" }}
        </button>

        <!-- Status Message -->
        <div v-if="status.message" :class="status.success ? 'text-green-500' : 'text-red-500'" class="mt-4 text-center font-semibold">
          {{ status.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import { Github, Mail, MessageCircle } from 'lucide-vue-next';

export default {
  name: "AboutPage",
  components: {
    Github,
    Mail,
    MessageCircle
  },
  data() {
    return {
      profile: {
        name: "Sonam Tobgay",
        profession: "Developer",
        about: "An innovative and detail-oriented developer with 5+ years of experience in building web and mobile applications. Passionate about technology and problem-solving.",
        picture: require('@/assets/dtoby.jpg'),
        contact: {
          email: "Sonamt566@gmail.com",
          phone: "+975 16922982",
          github: "https://github.com/dtobby"
        },
        education: {
          grade_or_degree: "Class XII",
          university_school: "Dunsam Academy",
          year: "2014"
        },
        certifications: [
          { title: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
          { title: "Full-Stack Web Development", issuer: "Coursera", year: "2021" }
        ],
        hobbies: ["Coding", "Photography", "Traveling", "Reading", "Football"]
      },
      contactForm: {
        name: "",
        email: "",
        message: ""
      },
      status: {
        message: "",
        success: false
      },
      loading: false // added loading state
    };
  },
  methods: {
    async sendMessage() {
      if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
        this.status = { message: "Please fill out all fields.", success: false };
        return;
      }

      this.loading = true; // Set loading to true when sending starts
      this.status = { message: "", success: false }; // Clear status message

      try {
        const response = await emailjs.send(
          'service_1sf42qo',
          'template_rl9goik',
          {
            to_name: 'Dtoby',
            from_name: this.contactForm.name,
            from_email: this.contactForm.email,
            message: this.contactForm.message
          },
          'bE3ymAjheCHGcAmjf'
        );

        console.log(response);
        this.status = { message: "Message sent successfully!", success: true };
        this.contactForm.name = "";
        this.contactForm.email = "";
        this.contactForm.message = "";
      } catch (error) {
        this.status = { message: "Failed to send message. Please try again.", success: false };
        console.error("Error in sending message:", error);
      } finally {
        this.loading = false; // Reset loading state after sending is complete
      }
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
