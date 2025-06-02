<template>
  <div class="min-h-screen py-8 px-4 print:p-0 mt-6">
    <div class="max-w-6xl mx-auto mb-4 print:hidden">
      <button @click="downloadPDF" :disabled="loading" class="float-right bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-cyan-700
              transition duration-200 flex items-center space-x-2 disabled:opacity-50">
        <svg v-if="loading" class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span>{{ loading ? 'Generating PDF...' : 'Download PDF' }}</span>
      </button>
    </div>
    <div id="resume-container"
      class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none resume-container">

      <div class="header-section p-8 bg-gradient-to-r from-cyan-600 to-cyan-800">
        <div class="max-w-4xl mx-auto text-white">
          <h1 class="text-4xl font-bold mb-2">Sonam Tobgay</h1>
          <p class="text-xl text-cyan-100">Software Engineer</p>
          <div class="contact-info mt-4">
            <div class="contact-item">
              <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Sonamt566@gmail.com</span>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(+975) 16922982</span>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Thimphu, Mothithang, Thorilham</span>
            </div>
          </div>
        </div>

      </div>

      <div class="main-content p-8">
        <div class="left-column">
          <div class="flex justify-center h-40 print:h-40">
            <img src="../assets/formal.jpeg" alt="Profile"
              class="rounded-full border-4 border-cyan-600 w-40 h-40 object-cover" />
          </div>

          <section class="section">
            <h2 class="section-title">Skills</h2>
            <div class="skills-category">
              <h3 class="skills-subtitle">Technical Proficiencies</h3>
              <div class="skills-container">
                <span v-for="skill in skills.technical" :key="skill" class="skill-tag technical-skill">
                  {{ skill }}
                </span>
              </div>
            </div>
            <div class="skills-category">
              <h3 class="skills-subtitle">Functional & Professional Competencies</h3>
              <div class="skills-container">
                <span v-for="skill in skills.functional" :key="skill" class="skill-tag functional-skill">
                  {{ skill }}
                </span>
              </div>
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">Education</h2>
            <div class="education-list">
              <div class="education-item">
                <h3 class="education-title">Dungsam Academy</h3>
                <p class="education-detail">Higher Secondary Education (Grade 12)</p>
                <p class="education-year">Completed: 2014</p>
              </div>
              <div class="education-item">
                <h3 class="education-title">Samdrup Jongkhar Middle Secondary School</h3>
                <p class="education-detail">Secondary Education (Grade 10)</p>
                <p class="education-year">Completed: 2012</p>
              </div>
            </div>
          </section>
        </div>

        <div class="right-column">
          <section class="section">
            <h2 class="section-title">About Me</h2>
            <p class="about-text">
              Results-oriented Software Engineer with 3+ years of experience specializing in full-stack development
              (Python/Django, JavaScript/Vue.js/React, Elixir/Phoenix) and data-driven solutions. Proven ability to
              design, develop, and deploy responsive web applications, insightful dashboards, and automated systems.
              Passionate about leveraging technology to solve complex problems, with a keen interest in DevOps and
              cybersecurity. Eager to contribute technical expertise to build secure, scalable, and efficient software
              solutions.
            </p>
          </section>

          <section class="section">
            <h2 class="section-title">Work Experience</h2>
            <div class="experience-list">
              <div v-for="(job, index) in experience" :key="index" class="experience-item">
                <div class="experience-header">
                  <div class="experience-title-company">
                    <h3 class="experience-title">{{ job.title }}</h3>
                    <p class="experience-company">{{ job.company }}</p>
                  </div>
                  <span class="experience-period">{{ job.period }}</span>
                </div>
                <ul class="experience-achievements">
                  <li v-for="(achievement, i) in job.achievements" :key="i" class="achievement-item">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">Training & Certifications</h2>
            <div class="training-list">
              <div v-for="(training, index) in trainings" :key="index" class="training-item">
                <h3 class="training-title">{{ training.title }}</h3>
                <p class="training-institution">{{ training.institution }}</p>
                <span class="training-period">{{ training.period }}</span>
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
          title: 'Frontend Developer',
          company: 'Bhutan Qualification and Professional Certification Authority',
          period: 'Nov 2024 - Apr 2025',
          achievements: [
            'Developed and maintained a responsive web application using Vue.js, enhancing user experience and performance.',
            'Implemented complex data visualizations and interactive dashboards to present key metrics and insights.',
            'Collaborated with cross-functional teams to gather requirements, design solutions',
            'Conducted thorough testing and debugging to ensure software reliability and performance.'
          ]
        },
        {
          title: 'Programmer',
          company: 'Druk Prep',
          period: 'Sept 2024 - Nov 2024',
          achievements: [
            'Developed and implemented a form-based website utilizing Vue.js for the frontend and Google Sheets as a backend.',
            'Designed data flow diagrams, developed APIs, and automated workflows using Google Apps Script.',
            'Led the full lifecycle of a data dashboard: design, development, testing, deployment (Firebase), and maintenance.',
            'Authored comprehensive technical documentation, user manuals, and conducted User Acceptance Testing (UAT) with clients.'
          ]
        },
        {
          title: 'Frontend Developer',
          company: 'Save The Children',
          period: 'June 2024 - Aug 2024',
          achievements: [
            'Engineered dynamic data passing and filtering mechanisms for interactive dashboards and data tables.',
            'Designed and implemented logical data visualizations to deliver actionable insights through dashboards.',
            'Prepared detailed technical documentation and user-friendly manuals for developed features.'
          ]
        },
        {
          title: 'Frontend Developer',
          company: 'The Pema Secretariat',
          period: 'Aug 2023 - Oct 2024',
          achievements: [
            'Gathered data requirements and effectively presented information through intuitive dashboards.',
            'Developed, tested, and visualized data flows for various application components.',
            'Conducted thorough unit and end-to-end testing using the Jest framework to ensure software quality.'
          ]
        },
        {
          title: 'Programmer',
          company: 'Tshongkhang Kuenjom',
          period: 'Dec 2022 - July 2023',
          achievements: [
            'Managed full project lifecycle: documentation, data gathering, client presentations, user manual creation, system configuration, and UAT.',
            'Developed, customized, and implemented software solutions tailored to business needs (Odoo ERP).',
            'Executed account mapping, configured Chart of Accounts, and performed system setups within Odoo ERP.'
          ]
        },
        {
          title: 'Developer',
          company: 'Smart Parking App - Desuung Skilling Programme',
          period: 'June 2022 - Feb 2023',
          achievements: [
            'Led a development team using Agile methodologies (Jira) for project tracking and sprint management.',
            'Contributed to UI/UX design processes under the guidance of senior design professionals.',
            'Trained and fine-tuned machine learning models for automated number plate recognition (ANPR).',
            'Successfully implemented QR code generation and scanning functionalities for payments and user identification.'
          ]
        },
        {
          title: 'Data Analytics Project Lead/Contributor',
          company: 'Desuung Skilling Programme (DSP) - IBM Data Analyst Track',
          period: 'Sept 2021 - March 2022',
          achievements: [
            'Developed and validated a machine learning model to predict used car prices, achieving ',
            'Conducted time-series analysis on stock market data to identify trends and build predictive insights.',
            'Engineered a regression model for predicting house rental prices based on diverse property features.',
            'Designed and deployed a Python-based web scraping solution to collect and analyze job market data from Dzi Selra , identifying employment trends in Bhutan.'
          ]
        }
      ],
      trainings: [
        {
          title: 'Microservices Web Application Development',
          institution: 'DrukSmart',
          period: 'September 2024'
        },
        {
          title: 'MLOps in Practice: Developing, Deploying, Managing ML Models in Cloud Environments',
          institution: 'GovTech-Omdena (Omdena School)',
          period: 'Sept 2022 - March 2023'
        },
        {
          title: 'Essential Data Science Building Blocks Course',
          institution: 'DHI-Omdena (Omdena School)',
          period: 'Sept 2022 - March 2023'
        },
        {
          title: 'IBM Data Analyst Professional Certificate',
          institution: 'Desuung Skilling Programme (via Coursera/IBM)',
          period: 'Sept 2022 - March 2023'
        }
      ],
      skills: {
        technical: [
          'Python', 'JavaScript', 'SQL', 'Google Apps Script', 'Elixir',
          'Django', 'React', 'Vue.js', 'Next.js', 'Phoenix Framework',
          'Data Analysis', 'Data Visualization', 'Dashboard Creation', 'Machine Learning (Model Training)',
          'Git', 'Odoo ERP', 'Firebase', 'Jira',
          'API Development & Integration', 'Process Automation', 'Web Scraping'
        ],
        functional: [
          'Project Management (Agile)',
          'Analytical & Problem-Solving Skills',
          'Data Interpretation & Reporting',
          'User Acceptance Testing (UAT)',
          'Technical Documentation',
          'UI/UX Design Principles(Basic Understanding)',
          'SAP Ariba Contracts(Functional Understanding)'
        ]
      }
    }
  },
  methods: {
    async downloadPDF() {
      this.loading = true
      const element = document.getElementById('resume-container')

      try {
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          letterRendering: true,
          width: element.scrollWidth,
          height: element.scrollHeight,
          windowWidth: 1200,
          windowHeight: element.scrollHeight,
          backgroundColor: '#ffffff'
        })

        const pdf = new jsPDF('p', 'mm', 'a4')
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()

        const imgWidth = pageWidth
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        let heightLeft = imgHeight
        let position = 0
        let pageCount = 0

        pdf.addImage(
          canvas.toDataURL('image/jpeg', 0.95),
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

        while (heightLeft > 0) {
          position = -(pageHeight * pageCount)
          pdf.addPage()
          pdf.addImage(
            canvas.toDataURL('image/jpeg', 0.95),
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

        pdf.setProperties({
          title: 'Resume - Sonam Tobgay',
          subject: 'Software Engineer Resume',
          author: 'Sonam Tobgay',
          keywords: 'resume, cv, developer, software engineer, python, javascript, vue, react, elixir, django, phoenix, data analysis',
          creator: 'Sonam Tobgay - Resume Generator'
        })

        pdf.save('Sonam-Tobgay-Resume.pdf')
      } catch (error) {
        console.error('PDF generation failed:', error)
        alert('Failed to generate PDF. Please check the console for errors and try again.')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.resume-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  width: 100%;
  max-width: 1200px;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.header-section {
  background: linear-gradient(135deg, #0891b2 0%, #155e75 100%);
  color: white;
  padding: 2rem;
  min-height: 200px;
}

.contact-info {
  margin-top: 1rem;
  display: block;
}

.contact-item {
  display: inline-block;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  vertical-align: top;
}

.contact-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.main-content {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.left-column {
  display: table-cell;
  width: 35%;
  vertical-align: top;
  padding-right: 2rem;
}

.right-column {
  display: table-cell;
  width: 65%;
  vertical-align: top;
}

.profile-section {
  text-align: center;
  margin-bottom: 2rem;
}

.section {
  margin-bottom: 2rem;
  page-break-inside: avoid;
}

.section-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #0891b2;
}

.skills-category {
  margin-bottom: 1.5rem;
}

.skills-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.skills-container {
  line-height: 1.8;
}

.skill-tag {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  margin: 0.25rem 0.25rem 0.25rem 0;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
}

.technical-skill {
  background-color: #cffafe;
  color: #155e75;
}

.functional-skill {
  background-color: #d1fae5;
  color: #065f46;
}

.education-list {
  display: block;
}

.education-item {
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  page-break-inside: avoid;
}

.education-title {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.education-detail {
  color: #4b5563;
  margin-bottom: 0.25rem;
}

.education-year {
  color: #6b7280;
  font-size: 0.875rem;
}

.about-text {
  color: #374151;
  line-height: 1.6;
  text-align: justify;
}

.experience-list {
  display: block;
}

.experience-item {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  page-break-inside: avoid;
  transition: background-color 0.2s;
}

.experience-item:hover {
  background-color: #f3f4f6;
}

.experience-header {
  display: table;
  width: 100%;
  margin-bottom: 1rem;
}

.experience-title-company {
  display: table-cell;
  vertical-align: top;
}

.experience-period {
  display: table-cell;
  text-align: right;
  vertical-align: top;
  font-size: 0.875rem;
  color: #6b7280;
  white-space: nowrap;
  padding-left: 1rem;
}

.experience-title {
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.experience-item:hover .experience-title {
  color: #0891b2;
}

.experience-company {
  color: #0891b2;
  font-weight: 600;
}

.experience-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievement-item {
  color: #4b5563;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.5;
}

.achievement-item::before {
  content: '•';
  color: #0891b2;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.training-list {
  display: block;
}

.training-item {
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: background-color 0.2s;
  page-break-inside: avoid;
}

.training-item:hover {
  background-color: #f3f4f6;
}

.training-title {
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.training-institution {
  color: #0891b2;
  margin-bottom: 0.25rem;
}

.training-period {
  color: #6b7280;
  font-size: 0.875rem;
}

@media print {
  .print\:hidden {
    display: none !important;
  }

  .print\:p-0 {
    padding: 0 !important;
  }

  .print\:shadow-none {
    box-shadow: none !important;
  }

  body {
    margin: 0;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .resume-container {
    box-shadow: none !important;
    border-radius: 0 !important;
    max-width: none !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .header-section {
    background: linear-gradient(135deg, #0891b2 0%, #155e75 100%) !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
    color: white !important;
  }

  .header-section .text-cyan-100 {
    color: #cffafe !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .header-section .contact-item svg {
    stroke: white !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .header-section .contact-item span {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .main-content {
    display: table !important;
    width: 100% !important;
    padding: 1cm !important;
  }

  .left-column {
    display: table-cell !important;
    width: 35% !important;
    padding-right: 1cm !important;
  }

  .right-column {
    display: table-cell !important;
    width: 65% !important;
  }

  .section {
    page-break-inside: avoid;
  }

  .experience-item,
  .education-item,
  .training-item {
    page-break-inside: avoid;
    /* Already in general styles, kept for clarity or if general ones were removed */
    background-color: #ffffff !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .technical-skill,
  .functional-skill {
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .technical-skill {
    background-color: #cffafe !important;
    color: #155e75 !important;
  }

  .functional-skill {
    background-color: #d1fae5 !important;
    color: #065f46 !important;
  }

  .profile-image-container {
    border-color: #0891b2 !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .section-title {
    border-bottom-color: #0891b2 !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .experience-company,
  .achievement-item::before,
  .training-institution {
    color: #0891b2 !important;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
}

@media (max-width: 768px) {
  .main-content {
    display: block;
  }

  .left-column,
  .right-column {
    display: block;
    width: 100%;
    padding-right: 0;
  }

  .left-column {
    margin-bottom: 2rem;
  }

  .contact-item {
    display: block;
    margin-right: 0;
    margin-bottom: 0.75rem;
  }

  .experience-header {
    display: block;
  }

  .experience-period {
    display: block;
    text-align: left;
    padding-left: 0;
    margin-top: 0.5rem;
  }

  .header-section {
    padding: 1.5rem;
  }

  h1.text-4xl {
    font-size: 2.25rem;
  }

  p.text-xl {
    font-size: 1.125rem;
  }
}
</style>