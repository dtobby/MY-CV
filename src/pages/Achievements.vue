<template>
  <div class="page-wrap">
    <div class="section-header">
      <span class="section-label">Milestones</span>
      <h1 class="section-title">Achievements</h1>
      <p class="section-subtitle">Key deliveries and milestones throughout my career.</p>
    </div>

    <div class="timeline">
      <div class="timeline-line"></div>

      <div v-for="(item, index) in achievements" :key="index" class="timeline-row">

        <!-- Left slot: card if even, empty if odd -->
        <div class="slot-left">
          <div v-if="index % 2 === 0" class="timeline-card">
            <span class="date-badge">{{ item.date }}</span>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.description }}</p>
          </div>
        </div>

        <!-- Center slot: always the dot -->
        <div class="slot-center">
          <div class="dot">
            <span class="dot-icon">{{ icons[index % icons.length] }}</span>
          </div>
        </div>

        <!-- Right slot: card if odd, empty if even -->
        <div class="slot-right">
          <div v-if="index % 2 !== 0" class="timeline-card">
            <span class="date-badge">{{ item.date }}</span>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementsPage',
  data() {
    return {
      icons: ['🚀', '🏛️', '🌐', '📊', '🛡️'],
      achievements: [
        {
          title: 'Delivered Playbt Platform',
          description: 'Led cross-functional development of a real-time full-stack web platform and mobile application using Phoenix, PostgreSQL, and a monorepo architecture, while enforcing code quality through structured reviews and strong testing practices.',
          date: 'Mar 2026',
        },
        {
          title: 'Built Government Certification Modules',
          description: 'Owned and delivered the ECPF and Accreditation modules for Bhutan Qualification and Professional Certification Authority, including frontend interfaces, API design, dashboards, and end-to-end testing.',
          date: 'Feb 2025',
        },
        {
          title: 'Deployed Evaluation Association Platform',
          description: 'Managed the full delivery lifecycle of a Vue.js and Django REST application for the Evaluation Association of Bhutan, including PostgreSQL schema design, dashboard features, and production deployment.',
          date: 'Apr 2025',
        },
        {
          title: 'IBM Data Analyst Track Projects',
          description: 'Completed applied analytics and machine learning projects covering used car price prediction, stock time-series analysis, rental price modelling, web scraping of Bhutan job data, and an NLP chatbot prototype.',
          date: 'Mar 2022',
        },
        {
          title: 'Desuung Service',
          description: 'Served as a Desuung volunteer during the COVID-19 period, contributing to public safety, discipline, teamwork, and community support under demanding conditions.',
          date: 'Mar 2020',
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-wrap {
  max-width: 72rem;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

.section-header { text-align: center; margin-bottom: 4rem; }
.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #22d3ee;
  margin-bottom: 0.5rem;
}
.section-title {
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}
.section-subtitle { color: #64748b; font-size: 0.9375rem; }

/* Timeline wrapper */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

/* Vertical center line */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(6, 182, 212, 0.4) 8%,
    rgba(6, 182, 212, 0.4) 92%,
    transparent
  );
  pointer-events: none;
}

/* Each row: always 3 columns [card | dot | card] */
.timeline-row {
  display: grid;
  grid-template-columns: 1fr 56px 1fr;
  align-items: center;
  margin-bottom: 2.5rem;
}

/* Left slot: right-align its card */
.slot-left {
  display: flex;
  justify-content: flex-end;
  padding-right: 1.5rem;
}

/* Center slot: keep dot centered */
.slot-center {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

/* Right slot: left-align its card */
.slot-right {
  display: flex;
  justify-content: flex-start;
  padding-left: 1.5rem;
}

/* Dot */
.dot {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0d1a30;
  border: 2px solid rgba(6, 182, 212, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
  flex-shrink: 0;
}
.dot-icon { font-size: 1.125rem; line-height: 1; }

/* Card */
.timeline-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  max-width: 360px;
  width: 100%;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.timeline-card:hover {
  border-color: rgba(6, 182, 212, 0.35);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.date-badge {
  display: inline-block;
  padding: 0.2rem 0.625rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.25);
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #22d3ee;
  letter-spacing: 0.04em;
  margin-bottom: 0.625rem;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.card-desc {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.65;
}

/* Mobile: single column */
@media (max-width: 640px) {
  .timeline-line { left: 24px; }

  .timeline-row {
    grid-template-columns: 56px 1fr;
    grid-template-rows: auto;
    margin-bottom: 2rem;
  }

  .slot-left,
  .slot-right {
    grid-column: 2;
    grid-row: 1;
    justify-content: flex-start;
    padding: 0 0 0 1rem;
  }

  .slot-center {
    grid-column: 1;
    grid-row: 1;
  }

  .timeline-card { max-width: none; }
}
</style>
