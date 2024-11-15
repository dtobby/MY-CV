<template>
  <div class="min-h-screen py-8 px-4 print:p-0 mt-6">
    <!-- Download Button -->
    <div class="max-w-6xl mx-auto mb-4 print:hidden">
      <button 
        @click="downloadPDF" 
        :disabled="loading"
        class="float-right bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 
               transition duration-200 flex items-center space-x-2 disabled:opacity-50"
      >
        <svg v-if="loading" class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
        <span>{{ loading ? 'Generating PDF...' : 'Download PDF' }}</span>
      </button>
    </div>

   
    <!-- Resume Container -->
    <div id="resume-container" class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none">
      <!-- Header with fixed height -->
      <div class="p-8 bg-gradient-to-r from-cyan-600 to-cyan-800 h-48 print:h-48">
        <div class="max-w-4xl mx-auto text-white">
          <h1 class="text-4xl font-bold mb-2">Sonam Tobgay</h1>
          <p class="text-xl text-cyan-100">Programmer</p>
          <div class="mt-4 flex flex-wrap gap-4 text-sm">
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Sonamt566@gmail.com
            </span>
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (+975) 16922982
            </span>
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Thimphu, Mothithang, Thorilham
            </span>
          </div>
        </div>
      </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <!-- Left Column -->
        <div class="md:col-span-1 space-y-6">
          <!-- Profile Image with fixed dimensions -->
          <div class="flex justify-center h-40 print:h-40">
            <img src="../assets/formal.jpeg" alt="Profile" class="rounded-full border-4 border-cyan-600 w-40 h-40 object-cover" />
          </div>

  <!-- Skills Section with centered text -->
  <section class="print:mt-4">
    <h2 class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-cyan-600">Skills</h2>
    <div class="mb-4 space-y-2">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Technical</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in skills.technical" :key="skill" 
              class=" mb-2 px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm inline-flex items-center justify-center">
          {{ skill }}
        </span>
      </div>
    </div>
    <div class="space-y-2">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Functional</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in skills.functional" :key="skill" 
              class=" mb-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm inline-flex items-center justify-center">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>


          <!-- Education Section -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-cyan-600">Education</h2>
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-800">Dungsam Academy</h3>
                <p class="text-gray-600">Grade: 12</p>
                <p class="text-gray-500 text-sm">Completed: 2014</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-800">Samdrup Jongkhar Middle Secondary School</h3>
                <p class="text-gray-600">Grade: 10</p>
                <p class="text-gray-500 text-sm">Completed: 2012</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Right Column -->
        <div class="md:col-span-2 space-y-6">
          <!-- About me  -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-cyan-600">About Me </h2>
            <p class="text-gray-700 leading-relaxed">
              Frontend Developer with full-stack capabilities, currently crafting responsive and intuitive user interfaces. Backed by practical
              backend development experience, while actively pursuing interests in DevOps practices and cybersecurity. Combines strong web development
              foundations with a growing expertise in cloud infrastructure and security best practices.
              Seeking to leverage this diverse technical background to build secure, scalable applications and automate deployment workflows.
            </p>
          </section>
          
          <!-- Experience Section -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-cyan-600">Work Experience</h2>
            <div class="space-y-6">
              <div v-for="(job, index) in experience" :key="index" class="group hover:bg-gray-50 p-4 rounded-lg transition duration-200">
                <div class="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <div>
                    <h3 class="font-bold text-gray-800 group-hover:text-cyan-600">{{ job.title }}</h3>
                    <p class="text-cyan-600">{{ job.company }}</p>
                  </div>
                  <span class="text-sm text-gray-500 mt-1 sm:mt-0">{{ job.period }}</span>
                </div>
                <ul class="list-disc list-inside space-y-1 text-gray-600">
                  <li v-for="(achievement, i) in job.achievements" :key="i" class="group-hover:text-gray-800">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Training Section -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-cyan-600">Training</h2>
            <div class="space-y-4">
              <div v-for="(training, index) in trainings" :key="index" class="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-200">
                <h3 class="font-bold text-gray-800">{{ training.title }}</h3>
                <p class="text-cyan-600">{{ training.institution }}</p>
                <span class="text-sm text-gray-500">{{ training.period }}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default {
  name: 'ResumePage',
  data() {
    return {
      loading: false,
      experience: [
        {
          title: 'Programmer',
          company: 'Druk Prep',
          period: 'Sept 2024 - Nov 2024',
          achievements: [
            'Developed and implemented a Form-based website using Google sheet as Backend and Vue.js framework',
            'Data flow diagram, API,  Automated with logical flow using Appscript provided by Googlesheet',
            'Designed, developed, tested, Deployed at Firebase, and maintained Dashboard',
            'Documentation and User Manual and also did UAT for Clinets.'
          ]
        },
        {
          title: 'Frontend Developer',
          company: 'Save The Children',
          period: 'June 2024 - Aug 2024',
          achievements: [
            'Data Passing, filtering data for dashboards and tables Dynamically.',
            'Designed and visualized data for dashboards with a logical approach.',
            'Prepared detailed documentation and user manuals.',
            
          ]
        },
        {
          title: 'Frontend Developer',
          company: 'The Pema Secretariat',
          period: 'Aug 2023 - Oct 2024',
          achievements: [
            'Gathered and presented data for dashboards.',
            'Developed, tested, and visualized data flows for applications.',
            'Conducted unit and end-to-end testing with Jest.'
          ]
        },
        {
          title: 'Programmer',
          company: 'Tshongkh and Kuenjom',
          period: 'Dec 2022 - July 2023',
          achievements: [
            'Documentation, Data gathering, Presentation, User Manual, configuration and UAT',
            'Developed, customized, implementation.',
            'Account Mapping, like Chart of account and configuration.'
          ]
        },
        {
          title: 'Developer',
          company: 'Smart Parkng App - Dessung',
          period: 'June 2022 - feb 2023',
          achievements: [
            'Led a team using Agile (Jira) for project management.',
            'Worked on UI/UX design under professional guidance.',
            'Model Training for number plate detection',
            'QR implementation'
          ]
        },
        {
          title: 'Data Analytics project',
          company: 'Desung',
          period: 'Sept 2021 - March 2022',
          achievements: [
            'Price prediction of used cars, IBM Data Analyst',
            'Stock analysis, IBM Data Analyst',
            'House rent prediction, IBM Data Analyst',
            'Job opportunities in Bhutan with web scraping data from Dzi Selra'
          ]
        }
      ],
      trainings: [
        {
          title: 'Microservices Web Application Development',
          institution: 'DrukSmart',
          period: 'September 2024 - September 2024'
        },
        {
          title: 'MLOps in Practice : Developing,Deploying,Managing ML Models in Clouds Enviroments',
          institution: 'GovTech-Omdena (Omdena School)',
          period: 'September 2022 - March 2023'
        },
        {
          title: 'Essential Data Science Buiding Blocks Course',
          institution: 'DHI-Omdena (Omdena School)',
          period: 'September 2022 - March 2023'
        },
        {
          title: 'Data Analytics on IMB',
          institution: 'Dessung Skilling Programe',
          period: 'September 2022 - March 2023'
        }
      ],
      skills: {
        technical: [
          'Appscript (google sheet)', 'Statistical Analysis', 'Data Visualization',
          'Python', 'Dashboard Creation', 'SQL', 'Django Framework', 'React',
          'Vue.js', 'Odoo', 'Java Script', 'API', 'Automation', 'Git'
        ],
        functional: [
          'Data Visualization', 'Project Management',
          'Analytical Skills', 'Problem Solving', 'SAP Ariba Contracts'
        ]
      }
    }
  },
  methods: {
    async downloadPDF() {
      this.loading = true
      const element = document.getElementById('resume-container')
      
      try {
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()
        
        // Calculate the scale factor (higher for better quality)
        const scale = 2
        const canvas = await html2canvas(element, {
          scale: scale,
          useCORS: true,
          logging: false,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight
        })

        // Calculate dimensions
        const imgWidth = pageWidth
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        
        // Split into pages if content is too long
        let heightLeft = imgHeight
        let position = 0
        let pageCount = 0

        // First page
        pdf.addImage(
          canvas.toDataURL('image/jpeg', 1.0),
          'JPEG',
          0,
          position,
          imgWidth,
          imgHeight,
          '',
          'FAST'
        )
        heightLeft -= pageHeight
        pageCount++

        // Add subsequent pages if needed
        while (heightLeft > 0) {
          position = -(pageHeight * pageCount)
          pdf.addPage()
          pdf.addImage(
            canvas.toDataURL('image/jpeg', 1.0),
            'JPEG',
            0,
            position,
            imgWidth,
            imgHeight,
            '',
            'FAST'
          )
          heightLeft -= pageHeight
          pageCount++
        }

        // Apply compression to reduce file size
        pdf.setProperties({
          title: 'Resume - Sonam Tobgay',
          subject: 'Resume',
          author: 'Sonam Tobgay',
          keywords: 'resume, cv, developer',
          creator: 'Resume Generator'
        })

        // Save the PDF
        pdf.save('Sonam-Tobgay-resume.pdf')
      } catch (error) {
        console.error('PDF generation failed:', error)
        // You might want to add user notification here
        alert('Failed to generate PDF. Please try again.')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style scoped>
@media print {
  .print\:hidden {
    display: none;
  }
  .print\:p-0 {
    padding: 0;
  }
  .print\:shadow-none {
    box-shadow: none;
  }
  .print\:h-48 {
    height: 12rem !important;
  }
  .print\:h-40 {
    height: 10rem !important;
  }
  .print\:mt-4 {
    margin-top: 1rem !important;
  }
}

/* Ensure consistent spacing in skills section */
.space-y-2 > * + * {
  margin-top: 0.5rem;
}

/* Force skill items to maintain their shape */
.inline-block {
  display: inline-block !important;
}

/* Optional: Add styles to ensure proper page breaks in print mode */
@media print {
  .page-break {
    page-break-before: always;
  }
}
/* Additional styles for centered skill tags */
.inline-flex {
  display: inline-flex !important;
}

.items-center {
  align-items: center !important;
}

.justify-center {
  justify-content: center !important;
}

/* Ensure consistent height for all skill tags */
.rounded-full {
  min-height: 1.75rem; /* or adjust as needed */
}

@media print {
  /* Previous print styles remain the same */
  
  /* Ensure centering persists in print */
  .inline-flex {
    display: inline-flex !important;
  }
  .items-center {
    align-items: center !important;
  }
  .justify-center {
    justify-content: center !important;
  }
}
</style>
