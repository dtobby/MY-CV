<template>
  <div class="p-4 md:p-8 mt-12">
    <div class="max-w-4xl mx-auto">
      <!-- Dropdown Section -->
      <div class="mb-8 relative">
        <label for="category" class="block text-2xl md:text-3xl font-medium text-cyan-500 mb-3 tracking-wide">
          Select Category to View Certificates
        </label>
        <select id="category" v-model="selectedCategory"
          class="w-full px-4 py-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 text-gray-100 text-lg hover:border-cyan-600 hover:bg-cyan-600/20 focus:ring-2 focus:ring-cyan-500/40 focus:border-transparent transition-all duration-300 ease-in-out appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2306b6d4%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[right_1rem_center]">
          <option value="" class="bg-gray-900 text-gray-300 text-lg">
            Select a category
          </option>
          <option v-for="category in categories" :key="category" :value="category"
            class="bg-gray-900 text-gray-100 text-lg">
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Image Display Section -->
      <div v-if="selectedCategory" class="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 bg-opacity-60">
        <h2 class="text-2xl md:text-3xl font-bold text-cyan-600 mb-4">{{ selectedCategory }} Certificates</h2>

        <!-- Slideshow Container -->
        <div class="relative w-full aspect-video mb-4">
          <!-- Main Image -->
          <div class="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg">
            <img v-for="(image, index) in getImages" :key="index" :src="image"
              :alt="`${selectedCategory} image ${index + 1}`"
              class="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500"
              :class="{ 'opacity-0': currentSlide !== index, 'opacity-100': currentSlide === index }" />
          </div>

          <!-- Navigation Arrows -->
          <button @click="prevSlide"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="nextSlide"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Dots Navigation -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            <button v-for="(_, index) in getImages" :key="index" @click="currentSlide = index"
              class="w-3 h-3 rounded-full transition-colors duration-300"
              :class="currentSlide === index ? 'bg-cyan-600' : 'bg-gray-400'" />
          </div>
        </div>

        <!-- Thumbnails -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <button v-for="(image, index) in getImages" :key="index" @click="currentSlide = index"
            class="relative rounded-lg overflow-hidden border-2 transition-colors duration-300"
            :class="currentSlide === index ? 'border-cyan-600' : 'border-transparent'">
            <img :src="image" :alt="`${selectedCategory} thumbnail ${index + 1}`" class="w-full h-20 object-cover" />
          </button>
        </div>
      </div>

      <!-- Download Button -->
      <button v-if="selectedCategory && getImages.length" @click="downloadPDF"
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

// Django
import Django1 from '@/assets/Django/Certificate_of_Django.jpg'

// API
import api1 from '@/assets/API/Designing RESTful Web APIs.jpg'

// Database
import DB1 from '@/assets/database/certificate_of_intermediate_SQL.jpg'
import DB2 from '@/assets/database/certificate_of_SQL joins.jpg'
import DB3 from '@/assets/database/certificate_of_SQL_sever.jpg'
import DB4 from '@/assets/database/certificate_of_introduction to SQL.jpg'

// Git
import git0 from '@/assets/Git/Mastering Git.jpg'
import git1 from '@/assets/Git/certificate_of_git.jpg'
import git2 from '@/assets/Git/Advanced Git 2 Techniques.jpg'
import git3 from '@/assets/Git/Getting Started with Git 2.jpg'
import git4 from '@/assets/Git/Git 2 Administration.jpg'
import git5 from '@/assets/Git/Git The Big Picture.jpg'
import git6 from '@/assets/Git/How Git Works_page.jpg'
import git7 from '@/assets/Git/Working with Git Branches.jpg'

// HTML and CSS
import html_css0 from '@/assets/HTML_and_CSS_andCSS_Tool/HTML and CSS Fundamentals.jpg'
import html_css1 from '@/assets/HTML_and_CSS_andCSS_Tool/Certificate_of_Boostrap4.jpg'
import html_css2 from '@/assets/HTML_and_CSS_andCSS_Tool/Figma Getting Started.jpg'
import html_css3 from '@/assets/HTML_and_CSS_andCSS_Tool/Figma Getting Started.jpg'
import html_css4 from '@/assets/HTML_and_CSS_andCSS_Tool/responsive_web_design.png'

// JavaScript
import Java0 from '@/assets/JavaScript/JavaScript Fundamentals.jpg'
import Java1 from '@/assets/JavaScript/Package Management in JavaScript.jpg'

// Data science
import DA0 from '@/assets/Data science/certificate_of_MachineLearning_GOVtech.jpg'
import DA1 from '@/assets/Data science/Certificate_Machine_learning_DHI.jpg'
import DA2 from '@/assets/Data science/Certificate_of_DSP_Data_Analytics.jpg'
import DA3 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0002.jpg'
import DA4 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0006.jpg'
import DA6 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0004.jpg'
import DA7 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0010.jpg'
import DA8 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0009.jpg'
import DA10 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0007.jpg'
import DA12 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0003.jpg'
import DA13 from '@/assets/Data science/Certificate_of_Data Analytic on IMB_page-0001.jpg'
import DA14 from '@/assets/Data science/certificate_of_introduction to Data Science in Python.jpg'
import DA15 from '@/assets/Data science/certificate_of_NLP.jpg'
import DA16 from '@/assets/Data science/certificate_of_Data Science for Everyone.jpg'


// Python
import Python0 from '@/assets/Python/certificate_of_intermediate Python.jpg'
import Python1 from '@/assets/Python/Certificate_of_Automation.jpg'
import Python2 from '@/assets/Python/scientific_computing_with_python.png'

// SAP
import SAP from '@/assets/SAP/SAPCertification20231228-29-phx9cj.jpg'

// Odoo
import Odoo1 from '@/assets/Odoo/certificate_of_odoo.jpg'
import Odoo2 from '@/assets/Odoo/certificate_of_odoo_Accounting_functional_implementation.jpg'
import Odoo3 from '@/assets/Odoo/certificate_of_odostudio.jpg'

// Vue
import V1 from '@/assets/Vue3/DrukSmart ON VUE.jpg'
import V2 from '@/assets/Vue3/Vue 3 Fundamentals.jpg'
import V3 from '@/assets/Vue3/Vue Animations_page-0001.jpg'

export default {
  name: 'ImageGallery',
  data() {
    return {
      selectedCategory: '',
      currentSlide: 0,
      categories: [
        'Django',
        'API',
        'Database',
        'Git',
        'HTML & CSS',
        'JavaScript',
        'Data Science',
        'Python',
        'SAP',
        'Vue.js',
        'Odoo'
      ],
      imageMap: {
        Django: [Django1],
        API: [api1],
        Database: [DB1, DB2, DB3, DB4],
        Git: [git0, git1, git2, git3, git4, git5, git6, git7],
        'HTML & CSS': [html_css0, html_css1, html_css2, html_css3, html_css4],
        JavaScript: [Java0, Java1],
        'Data Science': [
          DA0, DA1, DA2, DA3, DA4, DA6, DA7, DA8,
          DA10, DA12, DA13, DA14, DA15, DA16
        ],
        Python: [Python0, Python1, Python2],
        SAP: [SAP],
        'Vue.js': [V1, V2, V3],
        Odoo: [Odoo1, Odoo2, Odoo3]
      },
      autoplayInterval: null
    }
  },
  computed: {
    getImages() {
      if (!this.selectedCategory) return []
      return this.imageMap[this.selectedCategory] || []
    }
  },
  methods: {
    nextSlide() {
      if (this.getImages.length <= 1) return
      this.currentSlide = (this.currentSlide + 1) % this.getImages.length
    },
    prevSlide() {
      if (this.getImages.length <= 1) return
      this.currentSlide =
        this.currentSlide === 0 ? this.getImages.length - 1 : this.currentSlide - 1
    },
    startAutoplay() {
      if (this.getImages.length > 1) {
        this.autoplayInterval = setInterval(this.nextSlide, 5000)
      }
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
        this.autoplayInterval = null
      }
    },
    async downloadPDF() {
      try {
        const doc = new jsPDF()
        let yOffset = 10

        // Add title
        doc.setFontSize(16)
        doc.setTextColor(0, 128, 128)
        doc.text(this.selectedCategory, 105, yOffset, { align: 'center' })
        yOffset += 10

        // Add images
        for (let i = 0; i < this.getImages.length; i++) {
          try {
            const img = new Image()
            img.src = this.getImages[i]

            await new Promise((resolve, reject) => {
              img.onload = resolve
              img.onerror = reject
            })

            doc.addImage(img, 'JPEG', 15, yOffset, 180, 100)
            yOffset += 110

            if (i < this.getImages.length - 1) {
              doc.addPage()
              yOffset = 10
            }
          } catch (error) {
            console.error(`Error adding image ${i + 1} to PDF:`, error)
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
select option:checked {
  background: #0891b2 !important;
  /* cyan-600 */
}

select option:hover {
  background: #0891b2 !important;
  /* cyan-600 */
  color: white;
}
</style>