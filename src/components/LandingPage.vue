<template>
  <div class="hero">

    <!-- Social sidebar -->
    <div class="social-sidebar">
      <div class="sidebar-line sidebar-line--top"></div>
      <a v-for="s in socials" :key="s.label"
        :href="s.url" target="_blank" rel="noopener noreferrer"
        :aria-label="s.label" class="social-icon-btn">
        <component :is="s.icon" class="sidebar-icon" />
      </a>
      <div class="sidebar-line sidebar-line--bottom"></div>
    </div>

    <div class="hero-content">
      <!-- Profile photo -->
      <div class="avatar-wrap">
        <img src="@/assets/formal.jpeg" alt="Sonam Tobgay" class="avatar-img" />
        <div class="avatar-ring"></div>
      </div>

      <!-- Text -->
      <p class="greeting">Hi there, I'm</p>
      <h1 class="hero-name">Sonam Tobgay</h1>

      <div class="hero-role">
        <span class="role-text">{{ displayedRole }}</span>
        <span class="cursor">|</span>
      </div>

      <p class="hero-bio">
        Results-driven Software Engineer with 5+ years building full-stack applications
        across government, non-profit, and private sectors. Passionate about clean code,
        scalable systems, and delivering real impact.
      </p>

      <!-- CTAs -->
      <div class="hero-ctas">
        <router-link to="/home" class="btn-primary">
          View My Work
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
        <router-link to="/about" class="btn-secondary">Contact Me</router-link>
      </div>

      <!-- Stats -->
      <div class="hero-stats">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-dot"></div>
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
        { label: 'Facebook',  icon: 'Facebook',  url: 'https://www.facebook.com/' },
        { label: 'LinkedIn',  icon: 'Linkedin',  url: 'https://www.linkedin.com/in/sonam-tobgay/' },
        { label: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/' },
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
        { value: '5+', label: 'Years Experience' },
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
        delay = 2200;
        this.isDeleting = true;
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
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 4rem;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

/* Avatar */
.avatar-wrap {
  position: relative;
  width: 128px;
  height: 128px;
  margin-bottom: 1.75rem;
}
.avatar-img {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  position: relative;
  z-index: 1;
  border: 3px solid rgba(6, 182, 212, 0.4);
}
.avatar-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #06b6d4, #8b5cf6, #06b6d4);
  animation: spin 6s linear infinite;
  z-index: 0;
  filter: blur(1px);
  opacity: 0.7;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Text */
.greeting {
  font-size: 1rem;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(135deg, #f1f5f9 30%, #22d3ee 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
}

.hero-role {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  height: 2.25rem;
  margin-bottom: 1.5rem;
}
.role-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: #22d3ee;
}
.cursor {
  font-size: 1.25rem;
  color: #22d3ee;
  animation: blink 1s step-end infinite;
  margin-left: 1px;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.hero-bio {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #94a3b8;
  max-width: 520px;
  margin-bottom: 2rem;
}

/* Buttons */
.hero-ctas {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
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
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(6, 182, 212, 0.45);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  border: 1px solid rgba(6, 182, 212, 0.4);
  color: #94a3b8;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 12px;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
}
.btn-secondary:hover {
  color: #22d3ee;
  border-color: #22d3ee;
  background: rgba(6, 182, 212, 0.07);
  transform: translateY(-2px);
}

/* Stats */
.hero-stats {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  width: 100%;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
}
.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #22d3ee, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 0.75rem;
  color: #64748b;
  letter-spacing: 0.03em;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}
.scroll-dot {
  width: 4px;
  height: 8px;
  background: #22d3ee;
  border-radius: 2px;
  animation: scroll-bounce 2s ease-in-out infinite;
}
@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.3; }
}

/* Social sidebar */
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
  background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.4));
}
.sidebar-line--top {
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.4));
}
.sidebar-line--bottom {
  height: 60px;
  background: linear-gradient(to bottom, rgba(6, 182, 212, 0.4), transparent);
}

.social-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  color: #475569;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
  text-decoration: none;
}
.social-icon-btn:hover {
  color: #22d3ee;
  border-color: rgba(6, 182, 212, 0.45);
  background: rgba(6, 182, 212, 0.08);
  transform: translateX(-3px);
}

.sidebar-icon {
  width: 17px;
  height: 17px;
}

/* Hide on small screens — icons already in hero area on mobile */
@media (max-width: 640px) {
  .social-sidebar { display: none; }
}
</style>
