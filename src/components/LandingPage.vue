<template>
  <div class="hero">

    <!-- Fixed vertical social sidebar -->
    <div class="social-sidebar">
      <div class="sidebar-line sidebar-line--top"></div>
      <a v-for="s in socials" :key="s.label"
        :href="s.url" target="_blank" rel="noopener noreferrer"
        :aria-label="s.label" class="social-icon-btn">
        <component :is="s.icon" class="sidebar-icon" />
      </a>
      <div class="sidebar-line sidebar-line--bottom"></div>
    </div>

    <!-- Split layout -->
    <div class="hero-inner">

      <!-- Left: text -->
      <div class="hero-left">
        <p class="greeting">Hi there, I'm</p>
        <h1 class="hero-name">
          <span class="name-white">Sonam</span>
          <span class="name-accent"> Tobgay</span>
        </h1>

        <div class="hero-role">
          <span class="role-text">{{ displayedRole }}</span>
          <span class="cursor">|</span>
        </div>

        <p class="hero-bio">
          Results-driven Software Engineer with 5+ years building full-stack
          applications across government, non-profit, and private sectors.
          Passionate about clean code, scalable systems, and delivering real impact.
        </p>

        <div class="hero-ctas">
          <router-link to="/home" class="btn-primary">
            View My Work
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
          <router-link to="/about" class="btn-secondary">Contact Me</router-link>
        </div>

        <div class="hero-stats">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right: large portrait -->
      <div class="hero-right">
        <div class="photo-frame">
          <!-- Decorative blobs -->
          <div class="blob blob-cyan"></div>
          <div class="blob blob-purple"></div>
          <!-- Photo -->
          <img src="@/assets/dtoby_hero.png" alt="Sonam Tobgay" class="hero-photo" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Facebook, Linkedin, Instagram, Github } from 'lucide-vue-next';

export default {
  name: 'LandingPage',
  components: { Facebook, Linkedin, Instagram, Github },
  data() {
    return {
      socials: [
        { label: 'Facebook',  icon: 'Facebook',  url: 'https://www.facebook.com/sonam.tobgay.98229' },
        { label: 'LinkedIn',  icon: 'Linkedin',  url: 'https://www.linkedin.com/in/sonam-tobgay-b13547231/' },
        { label: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/i_am_seeker_one' },
        { label: 'GitHub',    icon: 'Github',    url: 'https://github.com/dtobby' },
      ],
      roles: [
        'Full Stack Developer',
        'Vue.js Specialist',
        'Backend Engineer',
        'Data Enthusiast',
      ],
      displayedRole: '',
      roleIndex: 0,
      charIndex: 0,
      isDeleting: false,
      stats: [
        { value: '5+',  label: 'Years Experience' },
        { value: '10+', label: 'Projects Delivered' },
        { value: '15+', label: 'Technologies' },
      ],
    };
  },
  mounted() {
    this._typeTimer = null;
    this.typeRole();
  },
  beforeUnmount() {
    clearTimeout(this._typeTimer);
  },
  methods: {
    typeRole() {
      const role = this.roles[this.roleIndex];
      if (this.isDeleting) {
        this.displayedRole = role.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.displayedRole = role.substring(0, this.charIndex + 1);
        this.charIndex++;
      }
      let delay = this.isDeleting ? 55 : 105;
      if (!this.isDeleting && this.charIndex === role.length) {
        delay = 2200; this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        delay = 380;
      }
      this._typeTimer = setTimeout(() => this.typeRole(), delay);
    },
  },
};
</script>

<style scoped>
/* ── HERO WRAPPER ─────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 3rem;
  position: relative;
}

/* ── SPLIT GRID ───────────────────────────────────────── */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
  max-width: 1100px;
  width: 100%;
}

/* ── LEFT COLUMN ──────────────────────────────────────── */
.hero-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}

.greeting {
  font-size: 1rem;
  color: #64748b;
  letter-spacing: 0.06em;
  margin-bottom: 0.375rem;
}

.hero-name {
  font-size: clamp(2.75rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 1rem;
}
.name-white { color: #f1f5f9; }
.name-accent {
  background: linear-gradient(135deg, #22d3ee, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  display: flex;
  align-items: center;
  height: 2rem;
  margin-bottom: 1.5rem;
}
.role-text { font-size: 1.0625rem; font-weight: 600; color: #22d3ee; }
.cursor {
  font-size: 1.125rem;
  color: #22d3ee;
  margin-left: 1px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.hero-bio {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #94a3b8;
  max-width: 480px;
  margin-bottom: 2rem;
}

/* Buttons */
.hero-ctas {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: #fff;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.35);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(6, 182, 212, 0.5); }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  border: 1px solid rgba(6, 182, 212, 0.35);
  color: #94a3b8;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-secondary:hover { color: #22d3ee; border-color: #22d3ee; background: rgba(6,182,212,0.07); transform: translateY(-2px); }

/* Stats */
.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.07);
  width: 100%;
}
.stat { display: flex; flex-direction: column; gap: 0.125rem; }
.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #22d3ee, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label { font-size: 0.75rem; color: #475569; letter-spacing: 0.03em; }

/* ── RIGHT COLUMN — PHOTO ─────────────────────────────── */
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-frame {
  position: relative;
  width: 380px;
  height: 490px;
  flex-shrink: 0;
}

/* Glow blobs behind photo */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
}
.blob-cyan {
  width: 220px; height: 220px;
  background: rgba(6, 182, 212, 0.25);
  top: -40px; left: -40px;
}
.blob-purple {
  width: 200px; height: 200px;
  background: rgba(139, 92, 246, 0.2);
  bottom: -30px; right: -30px;
}

/* Offset decorative border */
.photo-border-offset {
  position: absolute;
  inset: -10px -8px;
  border: 1.5px solid rgba(6, 182, 212, 0.25);
  border-radius: 28px;
  z-index: 1;
  pointer-events: none;
}

/* Dot grid accent (top-left corner) */
.dot-grid {
  position: absolute;
  top: -24px;
  left: -24px;
  width: 80px;
  height: 80px;
  background-image: radial-gradient(circle, rgba(6,182,212,0.45) 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  z-index: 0;
  pointer-events: none;
}

/* The photo — mask fades white edges into dark background */
.hero-photo {
  position: relative;
  z-index: 2;
  width: 380px;
  height: 490px;
  object-fit: cover;
  object-position: top center;
  border-radius: 20px;
  animation: float 6s ease-in-out infinite;
  /* Fade all four edges so the white background dissolves into the dark page */
  mask-image: radial-gradient(
    ellipse 82% 88% at 50% 38%,
    black 45%,
    rgba(0,0,0,0.9) 58%,
    rgba(0,0,0,0.5) 72%,
    transparent 90%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 82% 88% at 50% 38%,
    black 45%,
    rgba(0,0,0,0.9) 58%,
    rgba(0,0,0,0.5) 72%,
    transparent 90%
  );
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}

/* ── SOCIAL SIDEBAR ───────────────────────────────────── */
.social-sidebar {
  position: fixed;
  right: 1.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  z-index: 20;
}
.sidebar-line {
  width: 1px;
  height: 60px;
}
.sidebar-line--top  { background: linear-gradient(to bottom, transparent, rgba(6,182,212,0.4)); }
.sidebar-line--bottom { background: linear-gradient(to bottom, rgba(6,182,212,0.4), transparent); }

.social-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  color: #475569;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.03);
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
}
.social-icon-btn:hover {
  color: #22d3ee;
  border-color: rgba(6,182,212,0.45);
  background: rgba(6,182,212,0.08);
  transform: translateX(-3px);
}
.sidebar-icon { width: 17px; height: 17px; }

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  .hero-left { align-items: center; }
  .hero-bio  { text-align: center; max-width: 520px; }
  .hero-stats { justify-content: center; }
  .hero-right { order: -1; }
  .photo-frame { width: 260px; height: 330px; }
  .hero-photo  { width: 260px; height: 330px; }
  .social-sidebar { display: none; }
}
</style>
