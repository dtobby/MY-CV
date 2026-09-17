<template>
  <div class="page-wrap">
    <div class="section-header">
      <span class="section-label">Expertise</span>
      <h1 class="section-title">Skills</h1>
      <p class="section-subtitle">Technologies and tools I work with professionally.</p>
    </div>

    <!-- Category tabs -->
    <div class="tabs">
      <button v-for="cat in categories" :key="cat.key" :class="['tab', activeCategory === cat.key && 'tab--active']"
        @click="activeCategory = cat.key">
        <span class="tab-icon">{{ cat.icon }}</span>
        {{ cat.label }}
      </button>
    </div>

    <!-- Skills grid -->
    <div class="skills-grid">
      <div v-for="skill in filteredSkills" :key="skill.name" class="skill-card">
        <div class="skill-logo-wrap">
          <img :src="skill.logo" :alt="skill.name + ' logo'" loading="lazy" class="skill-logo"
            v-show="!imgErrors[skill.name]" @error="onImgError(skill.name)" />
          <span class="skill-logo-fallback" v-show="imgErrors[skill.name]">{{ skill.name[0] || '?' }}</span>
        </div>
        <div class="skill-info">
          <div class="skill-name-row">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-rating">{{ skill.rating }}/10</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill"
              :style="{ width: Math.min(skill.rating, 10) * 10 + '%', '--color': barColor(skill.rating) }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsPage',
  data() {
    return {
      activeCategory: 'all',
      imgErrors: {},
      categories: [
        { key: 'all', icon: '⚡', label: 'All' },
        { key: 'frontend', icon: '🎨', label: 'Frontend' },
        { key: 'backend', icon: '⚙️', label: 'Backend' },
        { key: 'devops', icon: '☁️', label: 'DevOps & Cloud' },
        { key: 'testing', icon: '🧪', label: 'Testing' },
        { key: 'data', icon: '📊', label: 'Data & ML' },
        { key: 'tools', icon: '🛠️', label: 'Tools' },
      ],
      skills: [
        // Frontend
        { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', rating: 9, category: 'frontend' },
        { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', rating: 9, category: 'frontend' },
        { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', rating: 8, category: 'frontend' },
        { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', rating: 8, category: 'frontend' },
        { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', rating: 8, category: 'frontend' },
        { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', rating: 5, category: 'frontend' },
        { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', rating: 5, category: 'frontend' },
        { name: 'Nuxt.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg', rating: 6, category: 'frontend' },
        { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg', rating: 7, category: 'frontend' },
        // Backend
        { name: 'Elixir', logo: 'https://cdn.simpleicons.org/elixir/9B30FF', rating: 5, category: 'backend' },
        { name: 'Phoenix', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/254_Phoenix_Framework_logo-512.png', rating: 5, category: 'backend' },
        { name: 'Django', logo: 'https://cdn.simpleicons.org/django/44B78B', rating: 6, category: 'backend' },
        { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', rating: 6, category: 'backend' },
        { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', rating: 3, category: 'backend' },
        { name: 'C#', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png', rating: 2, category: 'backend' },
        // DevOps & Cloud
        { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', rating: 7, category: 'devops' },
        { name: 'S3', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg', rating: 7, category: 'devops' },
        { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg', rating: 7, category: 'devops' },
        { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg', rating: 6, category: 'devops' },
        { name: 'Cloudflare', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg', rating: 7, category: 'devops' },
        { name: 'Ubuntu', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-ubuntu_cof-orange-hex.svg', rating: 7, category: 'devops' },
        { name: 'OpenTelemetry', logo: 'https://opentelemetry.io/img/logos/opentelemetry-logo-nav.png', rating: 6, category: 'devops' },
        { name: 'Jaeger', logo: 'https://www.jaegertracing.io/img/jaeger-icon-reverse-color.svg', rating: 6, category: 'devops' },
        { name: 'k6', logo: 'https://cdn.simpleicons.org/k6/FFFFFF', rating: 6, category: 'devops' },
        { name: 'Hostinger', logo: 'https://cdn.simpleicons.org/hostinger/673DE6', rating: 7, category: 'devops' },
        { name: 'Dokploy', logo: 'https://dokploy.com/logo.png', rating: 6, category: 'devops' },
        { name: 'Ollama', logo: 'https://cdn.simpleicons.org/ollama/FFFFFF', rating: 7, category: 'devops' },
        // Testing
        { name: 'Jest', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Jest_logo.svg', rating: 4, category: 'testing' },
        { name: 'Pytest', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg', rating: 4, category: 'testing' },
        { name: 'Cypress', logo: 'https://cdn.simpleicons.org/cypress/69D3A7', rating: 6, category: 'testing' },
        { name: 'Playwright', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Playwright_Logo.svg', rating: 3, category: 'testing' },
        { name: 'Postman', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png', rating: 2, category: 'testing' },
        { name: 'Selenium', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png', rating: 5, category: 'testing' },
        { name: 'ExUnit', logo: 'https://cdn.simpleicons.org/elixir/9B30FF', rating: 8, category: 'testing' },
        { name: 'Mox', logo: 'https://cdn.simpleicons.org/elixir/9B30FF', rating: 8, category: 'testing' },
        // Data & ML
        { name: 'Data Analytics', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg', rating: 9, category: 'data' },
        { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', rating: 9, category: 'data' },
        // Tools
        { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg', rating: 7, category: 'tools' },
        { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', rating: 7, category: 'tools' },
        { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg', rating: 8, category: 'tools' },
        { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', rating: 4, category: 'tools' },
        { name: 'Google Sheets', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg', rating: 8, category: 'tools' },
      ],
    };
  },
  computed: {
    filteredSkills() {
      if (this.activeCategory === 'all') return this.skills;
      return this.skills.filter(s => s.category === this.activeCategory);
    },
  },
  methods: {
    onImgError(name) {
      this.imgErrors[name] = true
    },
    barColor(rating) {
      if (rating >= 8) return '#22d3ee';
      if (rating >= 6) return '#818cf8';
      return '#64748b';
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

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

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

.section-subtitle {
  color: #64748b;
  font-size: 0.9375rem;
}

/* Tabs */
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.tab {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1.125rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: all 0.2s;
}

.tab:hover {
  color: #94a3b8;
  border-color: rgba(255, 255, 255, 0.12);
}

.tab--active {
  color: #22d3ee;
  background: rgba(6, 182, 212, 0.12);
  border-color: rgba(6, 182, 212, 0.3);
}

.tab-icon {
  font-size: 0.875rem;
}

/* Skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.125rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  border-color: rgba(6, 182, 212, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.skill-logo-wrap {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 6px;
}

.skill-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.skill-logo-fallback {
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #22d3ee;
  text-transform: uppercase;
}

.skill-info {
  flex: 1;
  min-width: 0;
}

.skill-name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #e2e8f0;
}

.skill-rating {
  font-size: 0.7rem;
  color: #475569;
  font-weight: 500;
}

.skill-bar-bg {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  border-radius: 2px;
  background: var(--color, #22d3ee);
  transition: width 0.8s ease;
  box-shadow: 0 0 8px var(--color, #22d3ee);
}
</style>
