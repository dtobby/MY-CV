<template>
  <div class="page-wrap">
    <!-- Header -->
    <div class="section-header">
      <span class="section-label">Portfolio</span>
      <h1 class="section-title">Project History</h1>
      <p class="section-subtitle">A collection of real-world systems I've built and shipped.</p>
    </div>

    <!-- Grid -->
    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        @click="openDialog(project)"
      >
        <!-- Logo area -->
        <div class="card-logo-wrap">
          <img :src="project.image" :alt="project.title" loading="lazy" class="card-logo" />
        </div>

        <!-- Card body -->
        <div class="card-body">
          <h2 class="card-title">{{ project.title }}</h2>
          <p class="card-company">{{ project.company }}</p>
          <p class="card-date">{{ project.date }}</p>

          <div class="card-stack">
            <span v-for="tech in project.stack.slice(0, 3)" :key="tech" class="stack-pill">
              {{ tech }}
            </span>
            <span v-if="project.stack.length > 3" class="stack-pill stack-pill--more">
              +{{ project.stack.length - 3 }}
            </span>
          </div>
        </div>

        <!-- Hover overlay -->
        <div class="card-overlay">
          <span class="overlay-btn">View Details →</span>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="modal">
      <div v-if="showDialog" class="modal-backdrop" @click.self="closeDialog">
        <div class="modal-box" role="dialog" aria-modal="true">
          <!-- Close -->
          <button @click="closeDialog" class="modal-close" aria-label="Close">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Project image -->
          <div class="modal-img-wrap">
            <img :src="selectedProject.project_image" :alt="selectedProject.title" loading="lazy" class="modal-img" />
          </div>

          <!-- Header -->
          <div class="modal-header">
            <div>
              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              <p class="modal-company">{{ selectedProject.company }}</p>
            </div>
            <div class="modal-meta">
              <span class="modal-role">{{ selectedProject.role }}</span>
              <span class="modal-date">{{ selectedProject.date }}</span>
            </div>
          </div>

          <!-- Description -->
          <div class="modal-section">
            <h3 class="modal-section-title">Overview</h3>
            <div class="modal-description">
              <p
                v-for="(line, i) in parsedDescription(selectedProject.description)"
                :key="i"
                :class="['modal-line', line.isBullet && 'modal-line--bullet']"
              >
                <span v-if="line.isBullet" class="bullet-dot">▸</span>
                {{ line.text }}
              </p>
            </div>
          </div>

          <div class="modal-two-col">
            <div class="modal-section">
              <h3 class="modal-section-title">Challenges</h3>
              <p class="modal-text">{{ selectedProject.challenges }}</p>
            </div>
            <div class="modal-section">
              <h3 class="modal-section-title">Solutions</h3>
              <p class="modal-text">{{ selectedProject.solutions }}</p>
            </div>
          </div>

          <!-- Stack -->
          <div class="modal-section">
            <h3 class="modal-section-title">Tech Stack</h3>
            <div class="modal-stack">
              <span v-for="tech in selectedProject.stack" :key="tech" class="modal-stack-pill">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import projects from '@/data/Projects';

export default {
  name: 'HomePage',
  data() {
    return {
      projects,
      showDialog: false,
      selectedProject: null,
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    openDialog(project) {
      this.selectedProject = project;
      this.showDialog = true;
      document.body.style.overflow = 'hidden';
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedProject = null;
      document.body.style.overflow = '';
    },
    handleKeydown(e) {
      if (e.key === 'Escape') this.closeDialog();
    },
    parsedDescription(description) {
      return description
        .split('\n')
        .filter(l => l.trim())
        .map(l => ({
          isBullet: l.trim().startsWith('-'),
          text: l.trim().startsWith('-') ? l.trim().slice(1).trim() : l.trim(),
        }));
    },
  },
};
</script>

<style scoped>
.page-wrap {
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

/* Section header */
.section-header { text-align: center; margin-bottom: 3rem; }
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

/* Projects grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

/* Project card */
.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.project-card:hover {
  border-color: rgba(6, 182, 212, 0.35);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(6, 182, 212, 0.15);
}
.project-card:hover .card-overlay { opacity: 1; }

.card-logo-wrap {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.5rem;
}
.card-logo {
  max-height: 80px;
  max-width: 120px;
  object-fit: contain;
}

.card-body { padding: 1.25rem; }
.card-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}
.card-company { font-size: 0.8125rem; color: #22d3ee; font-weight: 500; margin-bottom: 0.125rem; }
.card-date { font-size: 0.75rem; color: #475569; margin-bottom: 0.875rem; }

.card-stack { display: flex; flex-wrap: wrap; gap: 0.375rem; }
.stack-pill {
  padding: 0.2rem 0.625rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 999px;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #67e8f9;
}
.stack-pill--more {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.2);
  color: #c4b5fd;
}

/* Hover overlay */
.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(6, 13, 31, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
}
.overlay-btn {
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.35);
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.modal-box {
  background: #0d1a30;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  width: 100%;
  max-width: 760px;
  max-height: 88vh;
  overflow-y: auto;
  position: relative;
  padding: 1.5rem;
}
.modal-close {
  position: sticky;
  top: 0;
  float: right;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  border-radius: 8px;
  padding: 0.375rem;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
  z-index: 10;
}
.modal-close:hover { color: #f1f5f9; background: rgba(255,255,255,0.12); }

.modal-img-wrap {
  clear: both;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(255,255,255,0.07);
}
.modal-img { width: 100%; max-height: 280px; object-fit: cover; display: block; }

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.modal-title { font-size: 1.375rem; font-weight: 800; color: #f1f5f9; margin-bottom: 0.25rem; }
.modal-company { color: #22d3ee; font-weight: 600; font-size: 0.9rem; }
.modal-meta { text-align: right; display: flex; flex-direction: column; gap: 0.25rem; }
.modal-role { font-size: 0.8rem; color: #94a3b8; }
.modal-date { font-size: 0.8rem; color: #64748b; }

.modal-section { margin-bottom: 1.25rem; }
.modal-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #22d3ee;
  margin-bottom: 0.625rem;
}
.modal-description { display: flex; flex-direction: column; gap: 0.375rem; }
.modal-line { font-size: 0.9rem; color: #94a3b8; line-height: 1.6; }
.modal-line--bullet { display: flex; align-items: flex-start; gap: 0.5rem; }
.bullet-dot { color: #22d3ee; flex-shrink: 0; margin-top: 0.05rem; }
.modal-text { font-size: 0.9rem; color: #94a3b8; line-height: 1.6; }

.modal-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 560px) { .modal-two-col { grid-template-columns: 1fr; } }

.modal-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.modal-stack-pill {
  padding: 0.3rem 0.875rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #c4b5fd;
}

/* Modal transition */
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>
