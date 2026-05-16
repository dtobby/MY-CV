<template>
  <div class="p-4 md:p-8 mt-12">
    <div class="max-w-4xl mx-auto">
      <!-- Dropdown -->
      <div class="mb-8 relative">
        <label for="category" class="block text-2xl md:text-3xl font-medium text-cyan-500 mb-3 tracking-wide">
          Select Category to View Certificates
        </label>
        <select id="category" v-model="selectedCategory"
          class="w-full px-4 py-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 text-gray-100 text-lg hover:border-cyan-600 hover:bg-cyan-600/20 focus:ring-2 focus:ring-cyan-500/40 focus:border-transparent transition-all duration-300 ease-in-out appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2306b6d4%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[right_1rem_center]">
          <option value="" class="bg-gray-900 text-gray-300 text-lg">Select a category</option>
          <option v-for="category in categories" :key="category" :value="category"
            class="bg-gray-900 text-gray-100 text-lg">{{ category }}</option>
        </select>
      </div>

      <!-- Slideshow -->
      <div v-if="selectedCategory" class="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 bg-opacity-60">
        <h2 class="text-2xl md:text-3xl font-bold text-cyan-600 mb-4">{{ selectedCategory }} Certificates</h2>

        <div class="relative w-full aspect-video mb-4"
          @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
          <div class="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg">
            <transition name="fade">
              <img :key="currentSlide" :src="activeImages[currentSlide]"
                :alt="`${selectedCategory} certificate ${currentSlide + 1}`" loading="lazy"
                class="absolute top-0 left-0 w-full h-full object-contain" />
            </transition>
          </div>

          <button @click="prevSlide" aria-label="Previous certificate"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="nextSlide" aria-label="Next certificate"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            <button v-for="(_, index) in activeImages" :key="index" @click="currentSlide = index"
              :aria-label="`Go to certificate ${index + 1}`"
              class="w-3 h-3 rounded-full transition-colors duration-300"
              :class="currentSlide === index ? 'bg-cyan-600' : 'bg-gray-400'" />
          </div>
        </div>

        <!-- Thumbnails -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <button v-for="(image, index) in activeImages" :key="index" @click="currentSlide = index"
            :aria-label="`View certificate ${index + 1}`"
            class="relative rounded-lg overflow-hidden border-2 transition-colors duration-300"
            :class="currentSlide === index ? 'border-cyan-600' : 'border-transparent'">
            <img :src="image" :alt="`${selectedCategory} thumbnail ${index + 1}`" loading="lazy"
              class="w-full h-20 object-cover" />
          </button>
        </div>
      </div>

      <!-- Download Button -->
      <button v-if="selectedCategory && activeImages.length" @click="downloadPDF"
        class="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Download PDF</span>
      </button>
    </div>
  </div>
</template>

<script>
import { jsPDF } from 'jspdf'

export default {
  name: 'ImageGallery',
  created() {
    this._autoplayInterval = null
  },
  data() {
    return {
      selectedCategory: '',
      currentSlide: 0,
      categories: [
        'Django', 'API', 'Database', 'Git', 'HTML & CSS',
        'JavaScript', 'Data Science', 'Python', 'SAP', 'Vue.js', 'Odoo'
      ],
      imageMap: {
        Django: [
          require('@/assets/Django/Certificate_of_Django.jpg'),
        ],
        API: [
          require('@/assets/API/api_security_fundamental.png'),
          require('@/assets/API/Designing RESTful Web APIs.jpg'),
          require('@/assets/API/Specialized Testing API Testing.jpg'),
        ],
        Database: [
          require('@/assets/database/certificate_of_intermediate_SQL.jpg'),
          require('@/assets/database/certificate_of_SQL joins.jpg'),
          require('@/assets/database/certificate_of_SQL_sever.jpg'),
          require('@/assets/database/certificate_of_introduction to SQL.jpg'),
        ],
        Git: [
          require('@/assets/Git/Mastering Git.jpg'),
          require('@/assets/Git/certificate_of_git.jpg'),
          require('@/assets/Git/Advanced Git 2 Techniques.jpg'),
          require('@/assets/Git/Getting Started with Git 2.jpg'),
          require('@/assets/Git/Git 2 Administration.jpg'),
          require('@/assets/Git/Git The Big Picture.jpg'),
          require('@/assets/Git/How Git Works_page.jpg'),
          require('@/assets/Git/Working with Git Branches.jpg'),
        ],
        'HTML & CSS': [
          require('@/assets/HTML_and_CSS_andCSS_Tool/HTML and CSS Fundamentals.jpg'),
          require('@/assets/HTML_and_CSS_andCSS_Tool/Certificate_of_Boostrap4.jpg'),
          require('@/assets/HTML_and_CSS_andCSS_Tool/Figma Getting Started.jpg'),
          require('@/assets/HTML_and_CSS_andCSS_Tool/Interaction Design Fundamentals.jpg'),
          require('@/assets/HTML_and_CSS_andCSS_Tool/responsive_web_design.png'),
        ],
        JavaScript: [
          require('@/assets/JavaScript/JavaScript Fundamentals.jpg'),
          require('@/assets/JavaScript/Package Management in JavaScript.jpg'),
        ],
        'Data Science': [
          require('@/assets/Data science/certificate_of_MachineLearning_GOVtech.jpg'),
          require('@/assets/Data science/Certificate_Machine_learning_DHI.jpg'),
          require('@/assets/Data science/Certificate_of_DSP_Data_Analytics.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0001.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0002.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0003.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0004.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0006.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0007.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0009.jpg'),
          require('@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0010.jpg'),
          require('@/assets/Data science/certificate_of_introduction to Data Science in Python.jpg'),
          require('@/assets/Data science/certificate_of_NLP.jpg'),
          require('@/assets/Data science/certificate_of_Data Science for Everyone.jpg'),
        ],
        Python: [
          require('@/assets/Python/certificate_of_intermediate Python.jpg'),
          require('@/assets/Python/Certificate_of_Automation.jpg'),
          require('@/assets/Python/scientific_computing_with_python.png'),
        ],
        SAP: [
          require('@/assets/SAP/SAPCertification20231228-29-phx9cj.jpg'),
        ],
        'Vue.js': [
          require('@/assets/Vue3/DrukSmart ON VUE.jpg'),
          require('@/assets/Vue3/Vue 3 Fundamentals.jpg'),
          require('@/assets/Vue3/Vue Animations_page-0001.jpg'),
        ],
        Odoo: [
          require('@/assets/Odoo/certificate_of_odoo.jpg'),
          require('@/assets/Odoo/certificate_of_odoo_Accounting_functional_implementation.jpg'),
          require('@/assets/Odoo/certificate_of_odostudio.jpg'),
        ],
      },
    }
  },
  computed: {
    activeImages() {
      if (!this.selectedCategory) return []
      return this.imageMap[this.selectedCategory] || []
    }
  },
  methods: {
    nextSlide() {
      if (this.activeImages.length <= 1) return
      this.currentSlide = (this.currentSlide + 1) % this.activeImages.length
    },
    prevSlide() {
      if (this.activeImages.length <= 1) return
      this.currentSlide = this.currentSlide === 0
        ? this.activeImages.length - 1
        : this.currentSlide - 1
    },
    startAutoplay() {
      if (this.activeImages.length > 1) {
        this._autoplayInterval = setInterval(this.nextSlide, 5000)
      }
    },
    stopAutoplay() {
      clearInterval(this._autoplayInterval)
      this._autoplayInterval = null
    },
    async downloadPDF() {
      try {
        const doc = new jsPDF()
        let yOffset = 10
        doc.setFontSize(16)
        doc.setTextColor(0, 128, 128)
        doc.text(this.selectedCategory, 105, yOffset, { align: 'center' })
        yOffset += 10

        for (let i = 0; i < this.activeImages.length; i++) {
          try {
            const img = new Image()
            img.src = this.activeImages[i]
            await new Promise((resolve, reject) => {
              img.onload = resolve
              img.onerror = reject
            })
            doc.addImage(img, 'JPEG', 15, yOffset, 180, 100)
            yOffset += 110
            if (i < this.activeImages.length - 1) {
              doc.addPage()
              yOffset = 10
            }
          } catch (err) {
            console.error(`Error adding image ${i + 1} to PDF:`, err)
          }
        }

        doc.save(`${this.selectedCategory}-Certificates.pdf`)
      } catch (error) {
        console.error('Error generating PDF:', error)
        alert('Error generating PDF. Please try again.')
      }
    }
  },
  watch: {
    selectedCategory() {
      this.currentSlide = 0
      this.stopAutoplay()
      this.startAutoplay()
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeUnmount() {
    this.stopAutoplay()
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

select option:checked {
  background: #0891b2 !important;
}
</style>
