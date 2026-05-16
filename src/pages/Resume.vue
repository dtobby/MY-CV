<template>
  <div class="min-h-screen py-8 px-4 print:p-0 mt-6">
    <div class="max-w-6xl mx-auto mb-4 print:hidden">
      <button @click="downloadPDF" :disabled="loading" class="float-right bg-cyan-700 text-white px-6 py-2 rounded-lg hover:bg-cyan-600
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
            <img src="../assets/formal.jpeg" alt="Sonam Tobgay profile photo" loading="lazy"
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
              Results-driven Software Engineer with 5+ years of hands-on experience designing, developing, and
              deploying full-stack web applications across government, non-profit, and private sectors. Proficient in
              Python/Django, JavaScript/Vue.js/React, and Elixir/Phoenix, with strong experience in RESTful API
              development, relational database design, microservices architecture, and test-driven development.
              Demonstrated ability to lead end-to-end project lifecycles from requirements gathering and system design
              through deployment, testing, and client handover, while building clean, maintainable, and scalable
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
import experience from '@/data/Experience'
import trainings from '@/data/Trainings'

export default {
  name: 'ResumePage',
  data() {
    return {
      loading: false,
      experience,
      trainings,
      skills: {
        technical: [
          'Elixir', 'Python', 'JavaScript', 'SQL', 'Google Apps Script',
          'Django', 'Phoenix Framework', 'Vue.js', 'React', 'Next.js', 'Nuxt.js',
          'Data Analysis', 'Data Visualization', 'Dashboard Creation', 'Machine Learning',
          'Web Scraping', 'Git', 'Firebase', 'Jira', 'Odoo ERP',
          'API Development & Integration', 'Process Automation',
          'Testing (ExUnit / Jest / Mox / Unittest)'
        ],
        functional: [
          'Project Management (Agile)',
          'Analytical & Problem-Solving Skills',
          'Data Interpretation & Reporting',
          'User Acceptance Testing (UAT)',
          'Technical Documentation',
          'UI/UX Design Principles',
          'SAP Ariba Contracts (Functional Understanding)'
        ]
      }
    }
  },
  methods: {
    downloadPDF() {
      this.loading = true
      try {
        const pdf = new jsPDF('p', 'mm', 'a4')
        const sf = pdf.internal.scaleFactor  // pts/mm

        // Layout constants
        const PW = 210, PH = 297
        const M = 13
        const LW = 65
        const GAP = 6
        const RX = M + LW + GAP
        const RW = PW - RX - M
        const HDR = 44
        const BODY_TOP = HDR + 8
        const PAGE_BOT = PH - 10

        // Colors
        const C = {
          hdrBg:      [15, 76, 96],
          hdrAccent:  [8, 145, 178],
          cyanPale:   [207, 250, 254],
          cyanPaleTx: [21, 94, 117],
          greenPale:  [209, 250, 229],
          greenPaleTx:[6, 95, 70],
          white:      [255, 255, 255],
          dark:       [31, 41, 55],
          med:        [55, 65, 81],
          body:       [75, 85, 99],
          muted:      [107, 114, 128],
          cyan:       [8, 145, 178],
          divider:    [226, 232, 240],
        }
        const fill   = c => pdf.setFillColor(...c)
        const stroke = c => pdf.setDrawColor(...c)
        const color  = c => pdf.setTextColor(...c)

        // ── HEADER ────────────────────────────────────────────────
        fill(C.hdrBg)
        pdf.rect(0, 0, PW, HDR, 'F')
        fill(C.hdrAccent)
        pdf.rect(0, HDR - 2, PW, 2, 'F')

        color(C.white)
        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(24)
        pdf.text('Sonam Tobgay', M, 18)

        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(11)
        color(C.cyanPale)
        pdf.text('Software Engineer', M, 27)

        pdf.setFontSize(8)
        color(C.white)
        pdf.text('Email: sonamt566@gmail.com', M, 36)
        pdf.text('Phone: (+975) 16922982', M + 68, 36)
        pdf.text('Location: Thimphu, Bhutan', M + 128, 36)
        pdf.setFontSize(7.5)
        color(C.cyanPale)
        pdf.text('GitHub: github.com/dtobby', M, 41)

        // ── HELPERS ───────────────────────────────────────────────
        const sectionTitle = (x, y, w, label) => {
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(8.5)
          color(C.dark)
          pdf.text(label.toUpperCase(), x, y)
          pdf.setLineWidth(0.5)
          stroke(C.cyan)
          pdf.line(x, y + 1.5, x + w, y + 1.5)
          return y + 7.5
        }

        const drawTags = (x, startY, maxW, tags, bgC, txC) => {
          const fSize = 6.5
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(fSize)
          const tagH = 4.5, padX = 2.5, rowH = 7.5, gap = 2
          let cx = x, y = startY
          tags.forEach(tag => {
            const tw = (pdf.getStringUnitWidth(tag) * fSize) / sf + padX * 2
            if (cx + tw > x + maxW) { cx = x; y += rowH }
            fill(bgC)
            pdf.roundedRect(cx, y - 3.5, tw, tagH, 0.8, 0.8, 'F')
            color(txC)
            pdf.text(tag, cx + padX, y)
            cx += tw + gap
          })
          return y + rowH
        }

        // ── LEFT COLUMN ───────────────────────────────────────────
        let ly = BODY_TOP

        ly = sectionTitle(M, ly, LW, 'Technical Skills')
        ly = drawTags(M, ly, LW, this.skills.technical, C.cyanPale, C.cyanPaleTx)
        ly += 3

        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(7.5)
        color(C.med)
        pdf.text('Functional & Professional', M, ly)
        ly += 5.5
        ly = drawTags(M, ly, LW, this.skills.functional, C.greenPale, C.greenPaleTx)
        ly += 5

        ly = sectionTitle(M, ly, LW, 'Education')
        const edus = [
          { school: 'Dungsam Academy', detail: 'Higher Secondary (Grade 12)', year: 'Completed: 2014' },
          { school: 'Samdrup Jongkhar Middle Secondary School', detail: 'Secondary (Grade 10)', year: 'Completed: 2012' },
        ]
        edus.forEach(edu => {
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(8)
          color(C.dark)
          pdf.splitTextToSize(edu.school, LW).forEach(l => { pdf.text(l, M, ly); ly += 4 })
          ly += 0.5
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7.5)
          color(C.body)
          pdf.text(edu.detail, M, ly)
          ly += 4
          color(C.muted)
          pdf.text(edu.year, M, ly)
          ly += 7
        })

        // ── RIGHT COLUMN ──────────────────────────────────────────
        let ry = BODY_TOP

        const newPage = () => { pdf.addPage(); ry = M + 5 }
        const checkPage = needed => { if (ry + needed > PAGE_BOT) newPage() }

        // About Me
        ry = sectionTitle(RX, ry, RW, 'About Me')
        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(8.5)
        color(C.med)
        const aboutText = 'Results-driven Software Engineer with 5+ years of hands-on experience designing, developing, and deploying full-stack web applications across government, non-profit, and private sectors. Proficient in Python/Django, JavaScript/Vue.js/React, and Elixir/Phoenix, with strong experience in RESTful API development, relational database design, microservices architecture, and test-driven development. Demonstrated ability to lead end-to-end project lifecycles from requirements gathering through deployment and client handover.'
        pdf.splitTextToSize(aboutText, RW).forEach(l => { pdf.text(l, RX, ry); ry += 4.2 })
        ry += 4

        // Work Experience
        checkPage(20)
        ry = sectionTitle(RX, ry, RW, 'Work Experience')

        this.experience.forEach((job, idx) => {
          checkPage(14)

          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(8.5)
          color(C.dark)
          pdf.text(job.title, RX, ry)

          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7)
          color(C.muted)
          pdf.text(job.period, RX + RW, ry, { align: 'right' })
          ry += 4.5

          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7.5)
          color(C.cyan)
          pdf.text(job.company, RX, ry)
          ry += 4.5

          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7.5)
          color(C.body)
          job.achievements.forEach(ach => {
            const achLines = pdf.splitTextToSize('• ' + ach, RW - 2)
            checkPage(achLines.length * 3.8)
            achLines.forEach(l => { pdf.text(l, RX + 1.5, ry); ry += 3.8 })
            ry += 0.8
          })

          ry += 2
          if (idx < this.experience.length - 1) {
            stroke(C.divider)
            pdf.setLineWidth(0.2)
            pdf.line(RX, ry - 1, RX + RW, ry - 1)
          }
        })

        // Training & Certifications
        checkPage(20)
        ry += 2
        ry = sectionTitle(RX, ry, RW, 'Training & Certifications')

        this.trainings.forEach(t => {
          checkPage(14)
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(8)
          color(C.dark)
          pdf.splitTextToSize(t.title, RW).forEach(l => { pdf.text(l, RX, ry); ry += 4 })
          ry += 0.5
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7.5)
          color(C.cyan)
          pdf.text(t.institution, RX, ry)
          ry += 4
          color(C.muted)
          pdf.text(t.period, RX, ry)
          ry += 7
        })

        // ── COLUMN DIVIDER + PAGE NUMBERS ─────────────────────────
        const totalPages = pdf.internal.getNumberOfPages()
        for (let p = 1; p <= totalPages; p++) {
          pdf.setPage(p)
          if (p === 1) {
            stroke(C.divider)
            pdf.setLineWidth(0.3)
            pdf.line(M + LW + GAP / 2, BODY_TOP, M + LW + GAP / 2, PH - 10)
          }
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7)
          color(C.muted)
          pdf.text(`${p} / ${totalPages}`, PW - M, PH - 5, { align: 'right' })
        }

        pdf.setProperties({
          title: 'Resume - Sonam Tobgay',
          subject: 'Software Engineer Resume',
          author: 'Sonam Tobgay',
          keywords: 'resume, software engineer, Bhutan',
          creator: 'Sonam Tobgay',
        })

        pdf.save('Sonam-Tobgay-Resume.pdf')
      } catch (error) {
        console.error('PDF generation failed:', error)
        alert('Failed to generate PDF. Please try again.')
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
