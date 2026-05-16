<template>
  <div class="page-wrap">

    <!-- Hero card -->
    <div class="profile-hero">
      <div class="profile-photo-wrap">
        <img :src="profile.picture" alt="Sonam Tobgay" class="profile-photo" />
      </div>
      <div class="profile-info">
        <h1 class="profile-name">{{ profile.name }}</h1>
        <p class="profile-role">{{ profile.profession }}</p>
        <p class="profile-about">{{ profile.about }}</p>
        <div class="profile-socials">
          <a :href="profile.contact.github" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
            <Github class="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a :href="'mailto:' + profile.contact.email" class="social-btn" aria-label="Email">
            <Mail class="w-5 h-5" />
            <span>Email</span>
          </a>
          <a :href="'https://wa.me/' + profile.contact.phone.replace(/[^0-9]/g, '')" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="WhatsApp">
            <MessageCircle class="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Two columns -->
    <div class="about-grid">

      <!-- Left: Details -->
      <div class="detail-col">

        <!-- Contact -->
        <div class="glass-card">
          <h2 class="card-title">
            <span class="card-title-icon">📬</span> Contact Details
          </h2>
          <ul class="detail-list">
            <li class="detail-item">
              <span class="detail-label">Email</span>
              <span class="detail-value">{{ profile.contact.email }}</span>
            </li>
            <li class="detail-item">
              <span class="detail-label">Phone</span>
              <span class="detail-value">{{ profile.contact.phone }}</span>
            </li>
            <li class="detail-item">
              <span class="detail-label">GitHub</span>
              <a :href="profile.contact.github" class="detail-link" target="_blank" rel="noopener noreferrer">
                {{ profile.contact.github.replace('https://', '') }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Education -->
        <div class="glass-card">
          <h2 class="card-title">
            <span class="card-title-icon">🎓</span> Education
          </h2>
          <p class="edu-degree">{{ profile.education.grade_or_degree }}</p>
          <p class="edu-school">{{ profile.education.university_school }}</p>
          <p class="edu-year">{{ profile.education.year }}</p>
        </div>

        <!-- Certifications -->
        <div class="glass-card">
          <h2 class="card-title">
            <span class="card-title-icon">🏆</span> Certifications
          </h2>
          <ul class="cert-list">
            <li v-for="(cert, i) in profile.certifications" :key="i" class="cert-item">
              <span class="cert-dot"></span>
              <div>
                <p class="cert-title">{{ cert.title }}</p>
                <p class="cert-meta">{{ cert.issuer }} · {{ cert.year }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Hobbies -->
        <div class="glass-card">
          <h2 class="card-title">
            <span class="card-title-icon">✨</span> Interests
          </h2>
          <div class="hobbies-wrap">
            <span v-for="(hobby, i) in profile.hobbies" :key="i" class="hobby-tag">{{ hobby }}</span>
          </div>
        </div>
      </div>

      <!-- Right: Contact form -->
      <div class="glass-card form-card">
        <h2 class="card-title">
          <span class="card-title-icon">💬</span> Send Me a Message
        </h2>

        <div class="form-group">
          <label for="name" class="form-label">Your Name</label>
          <input id="name" type="text" v-model="contactForm.name"
            class="form-input" placeholder="John Doe" />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <input id="email" type="email" v-model="contactForm.email"
            class="form-input" placeholder="john@example.com" />
        </div>

        <div class="form-group">
          <label for="message" class="form-label">Message</label>
          <textarea id="message" v-model="contactForm.message" rows="6"
            class="form-input form-textarea" placeholder="What's on your mind?"></textarea>
        </div>

        <button @click="sendMessage" :disabled="loading" class="form-submit">
          <svg v-if="loading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          {{ loading ? 'Sending…' : 'Send Message' }}
        </button>

        <transition name="fade">
          <p v-if="status.message" :class="['form-status', status.success ? 'form-status--ok' : 'form-status--err']">
            {{ status.message }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { Github, Mail, MessageCircle } from 'lucide-vue-next';
import profile from '@/data/Profile';
import { isValidEmail } from '@/utils/validation';

export default {
  name: 'AboutPage',
  components: { Github, Mail, MessageCircle },
  data() {
    return {
      profile,
      contactForm: { name: '', email: '', message: '' },
      status: { message: '', success: false },
      loading: false,
    };
  },
  methods: {
    async sendMessage() {
      if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
        this.status = { message: 'Please fill out all fields.', success: false };
        return;
      }
      if (!isValidEmail(this.contactForm.email)) {
        this.status = { message: 'Please enter a valid email address.', success: false };
        return;
      }
      this.loading = true;
      this.status = { message: '', success: false };
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.contactForm),
        });
        const data = await response.json();
        if (response.ok) {
          this.status = { message: 'Message sent successfully! I\'ll get back to you soon.', success: true };
          this.contactForm = { name: '', email: '', message: '' };
        } else {
          this.status = { message: data.error || 'Failed to send. Please try again.', success: false };
        }
      } catch {
        this.status = { message: 'Network error. Please try again.', success: false };
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.page-wrap {
  max-width: 72rem;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

/* Profile hero */
.profile-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.profile-photo-wrap {
  flex-shrink: 0;
}
.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 3px solid rgba(6,182,212,0.4);
  box-shadow: 0 0 24px rgba(6,182,212,0.2);
}
.profile-info { flex: 1; min-width: 0; }
.profile-name {
  font-size: 1.75rem;
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
}
.profile-role { color: #22d3ee; font-weight: 600; font-size: 0.9375rem; margin-bottom: 0.625rem; }
.profile-about { color: #94a3b8; font-size: 0.875rem; line-height: 1.65; margin-bottom: 1rem; }

.profile-socials { display: flex; gap: 0.625rem; flex-wrap: wrap; }
.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.4rem 0.875rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: all 0.2s;
}
.social-btn:hover { color: #22d3ee; border-color: rgba(6,182,212,0.4); background: rgba(6,182,212,0.07); }

/* Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  align-items: start;
}
@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }

.detail-col { display: flex; flex-direction: column; gap: 1.25rem; }

/* Glass card */
.glass-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.5rem;
  transition: border-color 0.2s;
}
.glass-card:hover { border-color: rgba(6,182,212,0.2); }
.form-card { height: fit-content; }

.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.card-title-icon { font-size: 1rem; }

/* Detail list */
.detail-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.625rem; }
.detail-item { display: flex; flex-direction: column; gap: 0.125rem; }
.detail-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #475569; }
.detail-value { font-size: 0.875rem; color: #94a3b8; }
.detail-link { font-size: 0.875rem; color: #22d3ee; text-decoration: none; }
.detail-link:hover { text-decoration: underline; }

/* Education */
.edu-degree { font-size: 0.9375rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.25rem; }
.edu-school { font-size: 0.875rem; color: #94a3b8; margin-bottom: 0.25rem; }
.edu-year { font-size: 0.8125rem; color: #475569; }

/* Certifications */
.cert-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.875rem; }
.cert-item { display: flex; gap: 0.75rem; align-items: flex-start; }
.cert-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22d3ee;
  flex-shrink: 0;
  margin-top: 0.45rem;
}
.cert-title { font-size: 0.8125rem; font-weight: 600; color: #cbd5e1; line-height: 1.4; margin-bottom: 0.125rem; }
.cert-meta { font-size: 0.75rem; color: #475569; }

/* Hobbies */
.hobbies-wrap { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.hobby-tag {
  padding: 0.3rem 0.875rem;
  background: rgba(139,92,246,0.1);
  border: 1px solid rgba(139,92,246,0.25);
  border-radius: 999px;
  font-size: 0.8rem;
  color: #c4b5fd;
  font-weight: 500;
}

/* Form */
.form-group { margin-bottom: 1.125rem; }
.form-label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}
.form-input {
  width: 100%;
  padding: 0.6875rem 0.875rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}
.form-input:focus {
  border-color: rgba(6,182,212,0.5);
  box-shadow: 0 0 0 3px rgba(6,182,212,0.1);
}
.form-input::placeholder { color: #475569; }
.form-textarea { resize: vertical; min-height: 130px; font-family: inherit; }

.form-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: #fff;
  font-weight: 600;
  font-size: 0.9375rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  box-shadow: 0 4px 16px rgba(6,182,212,0.25);
}
.form-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(6,182,212,0.4);
}
.form-submit:disabled { opacity: 0.6; cursor: not-allowed; }

.form-status {
  margin-top: 0.875rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
}
.form-status--ok { background: rgba(34,197,94,0.1); color: #86efac; border: 1px solid rgba(34,197,94,0.2); }
.form-status--err { background: rgba(239,68,68,0.1); color: #fca5a5; border: 1px solid rgba(239,68,68,0.2); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
