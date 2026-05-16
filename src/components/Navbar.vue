<template>
  <nav class="navbar">
    <div class="nav-inner">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">DTOBY</router-link>

      <!-- Desktop links -->
      <div class="hidden sm:flex items-center gap-1">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          :class="['nav-link', isActive(link.path) && 'nav-link--active']"
        >
          {{ link.name }}
        </router-link>

        <div class="relative">
          <button
            @click="toggleDropdown"
            :class="['nav-link flex items-center gap-1', (isActive('/resume') || isActive('/certificates')) && 'nav-link--active']"
          >
            Portfolio
            <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="dropdownOpen && 'rotate-180'"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition name="dropdown">
            <ul v-if="dropdownOpen" class="dropdown-menu">
              <li>
                <router-link to="/resume" @click="closeDropdown" class="dropdown-item">
                  <span class="dropdown-icon">📄</span> Resume
                </router-link>
              </li>
              <li>
                <router-link to="/certificates" @click="closeDropdown" class="dropdown-item">
                  <span class="dropdown-icon">🏆</span> Certificates
                </router-link>
              </li>
            </ul>
          </transition>
        </div>
      </div>

      <!-- Mobile hamburger -->
      <button @click="toggleMobileMenu" class="sm:hidden nav-hamburger" aria-label="Toggle menu">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            :d="showMobileMenu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="mobile-menu">
      <div v-if="showMobileMenu" class="mobile-menu">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          @click="showMobileMenu = false"
          :class="['mobile-link', isActive(link.path) && 'mobile-link--active']"
        >
          {{ link.name }}
        </router-link>
        <router-link to="/resume" @click="showMobileMenu = false"
          :class="['mobile-link', isActive('/resume') && 'mobile-link--active']">
          Resume
        </router-link>
        <router-link to="/certificates" @click="showMobileMenu = false"
          :class="['mobile-link', isActive('/certificates') && 'mobile-link--active']">
          Certificates
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
  data() {
    return {
      showMobileMenu: false,
      dropdownOpen: false,
      links: [
        { name: 'Home', path: '/home' },
        { name: 'Skills', path: '/skills' },
        { name: 'About', path: '/about' },
        { name: 'Achievements', path: '/achievements' },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      this.dropdownOpen = false;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
      this.showMobileMenu = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(6, 13, 31, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, #22d3ee, #06b6d4, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  transition: opacity 0.2s;
}
.nav-logo:hover { opacity: 0.8; }

.nav-link {
  padding: 0.375rem 0.875rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
  cursor: pointer;
  background: none;
  border: none;
}
.nav-link:hover {
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.07);
}
.nav-link--active {
  color: #22d3ee;
  background: rgba(6, 182, 212, 0.12);
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  min-width: 160px;
  background: rgba(10, 20, 45, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  padding: 0.375rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  list-style: none;
  margin: 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}
.dropdown-item:hover {
  color: #22d3ee;
  background: rgba(6, 182, 212, 0.1);
}
.dropdown-icon { font-size: 0.875rem; }

.nav-hamburger {
  color: #94a3b8;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
}
.nav-hamburger:hover { color: #22d3ee; }

.mobile-menu {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.75rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-link {
  padding: 0.625rem 0.875rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}
.mobile-link:hover { color: #e2e8f0; background: rgba(255,255,255,0.05); }
.mobile-link--active { color: #22d3ee; background: rgba(6,182,212,0.1); }

/* Dropdown transition */
.dropdown-enter-active, .dropdown-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-6px); }

/* Mobile menu transition */
.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity 0.2s ease; }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; }
</style>
