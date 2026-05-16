# Code Review — Full Codebase

> Reviewed by: Senior Engineer perspective  
> Date: 2026-05-16  
> Scope: All source files under `src/`

---

## Security — Fix These First

### 1. EmailJS credentials exposed in source (`About.vue:180-189`)

Your service ID, template ID, and public key are hardcoded and will appear in plain text in the compiled JS bundle — anyone can find them in DevTools.

```js
// CURRENT — exposed
emailjs.send('service_1sf42qo', 'template_rl9goik', {...}, 'bE3ymAjheCHGcAmjf')
```

Move them to a `.env` file:

```
VUE_APP_EMAILJS_SERVICE_ID=service_1sf42qo
VUE_APP_EMAILJS_TEMPLATE_ID=template_rl9goik
VUE_APP_EMAILJS_PUBLIC_KEY=bE3ymAjheCHGcAmjf
```

Reference as `process.env.VUE_APP_EMAILJS_SERVICE_ID` in the code. Add `.env` to `.gitignore`.

---

### 2. XSS via `v-html` (`Home.vue:44`)

```html
<p v-html="formattedDescription(selectedProject.description)"></p>
```

`v-html` renders raw HTML without sanitisation. Data is currently static so risk is low — but if descriptions ever come from an API or user input this is a stored XSS vector. Replace with a proper list renderer:

```html
<ul>
  <li v-for="(line, i) in parsedLines(description)" :key="i">{{ line }}</li>
</ul>
```

---

### 3. No email format validation (`About.vue:171`)

Only an empty-check is done. `"aaa"` passes as a valid email. Add a format check:

```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(this.contactForm.email)) {
  this.status = { message: 'Please enter a valid email.', success: false }
  return
}
```

---

### 4. External image URLs that can expire (`SkillsPage.vue`)

`encrypted-tbn0.gstatic.com` is Google's thumbnail cache — those URLs expire and break silently. `qualitytraining.be`, `w7.pngwing.com`, `media.istockphoto.com` are third-party servers you don't control. These also expose your visitors' IPs to those domains.

**Fix:** Download all skill logos and bundle them locally under `src/assets/logos/`.

---

## Performance — High Impact

### 5. All 35+ certificate images imported eagerly (`Certificates.vue:86-153`)

Every certificate image is statically imported at the top of the file. The entire set is bundled regardless of whether the user visits the Certificates page. Use inline `require()` inside `imageMap` data instead:

```js
imageMap: {
  Git: [
    require('@/assets/Git/Mastering Git.jpg'),
    require('@/assets/Git/certificate_of_git.jpg'),
  ],
  // ...
}
```

This also removes the 30+ lines of top-level imports.

---

### 6. `canvas.toDataURL()` called per page in the PDF loop (`Resume.vue:340,355`)

In the pagination loop the full canvas is re-encoded to JPEG on every page. For a 3-page resume that's 3 expensive encode operations on the same data. Encode once:

```js
const imgData = canvas.toDataURL('image/jpeg', 0.95)
// use imgData in every addImage() call
```

---

### 7. `html2canvas` at `scale: 2` creates a huge canvas (`Resume.vue:315`)

At scale 2, a 1200px-wide resume becomes a 2400px canvas. On a long resume this is easily 2400×5000px — ~46MB of raw pixel data in memory before compression. Drop to `scale: 1.5` — print quality is still excellent and memory drops 44%.

---

### 8. All slideshow images rendered in the DOM simultaneously (`Certificates.vue:29`)

```html
<img v-for="(image, index) in getImages" ... />
```

All 8–15 images in a category are in the DOM at once, toggled only via `opacity`. Render only the active slide:

```html
<img :src="getImages[currentSlide]" :alt="`${selectedCategory} certificate`" ... />
```

---

### 9. `autoplayInterval` stored in reactive `data()` (`Certificates.vue:190`)

An interval ID is just a number and doesn't need Vue reactivity. Storing it in `data()` creates unnecessary overhead. Use a plain instance property instead:

```js
created() {
  this._autoplayInterval = null
},
methods: {
  startAutoplay() {
    this._autoplayInterval = setInterval(this.nextSlide, 5000)
  },
  stopAutoplay() {
    clearInterval(this._autoplayInterval)
    this._autoplayInterval = null
  }
}
```

---

### 10. No `loading="lazy"` on images

Project cards, certificate thumbnails, and skill logos all load eagerly on page mount. Add `loading="lazy"` to all `<img>` tags that are below the fold.

---

## Code Quality & Bugs

### 11. Duplicate import — same file imported twice (`Certificates.vue:113-114`)

```js
import html_css2 from '@/assets/HTML_and_CSS_andCSS_Tool/Figma Getting Started.jpg'
import html_css3 from '@/assets/HTML_and_CSS_andCSS_Tool/Figma Getting Started.jpg'
```

Both import the exact same file. `Interaction Design Fundamentals.jpg` is likely the missing certificate here — the file was never added but the import slot was kept.

---

### 12. Career data duplicated across three files

`Projects.js`, `Resume.vue` (`experience` array), and `About.vue` (certifications) all contain overlapping career information. Adding a new job requires updating 2–3 places with slightly different wording.

**Fix:** Extract into shared data files:
- `src/data/Experience.js`
- `src/data/Profile.js`

Import from these in both `Resume.vue` and `About.vue`.

---

### 13. Dead code in `LandingPage.vue`

- `goToHome()` method is defined but never called — navigation is handled by `<router-link>`
- `projects` data array with placeholder strings is declared but never used in the template

Both should be removed.

---

### 14. `console.log(response)` left in production (`About.vue:192`)

```js
console.log(response)  // remove this
```

---

### 15. Navbar active state doesn't sync with browser navigation (`Navbar.vue`)

Active link is tracked via `setActiveLink()` on click. If the user presses the browser Back/Forward button, the active highlight won't update. Derive it from the actual route instead:

```js
computed: {
  currentPath() {
    return this.$route.path
  }
}
```

Then use `:class="{ active: link.path === currentPath }"` instead of the local `activeLink` state.

---

### 16. Skipped variable names from deleted imports (`Certificates.vue`)

DA5, DA9, DA11 are absent — the numbering has gaps from prior deletions. Rename them sequentially the next time you touch this file.

---

### 17. Computed property named like a method (`Certificates.vue:194`)

`getImages` reads like a getter function. Computed properties should be nouns. Rename to `currentImages` or `activeImages`.

---

### 18. Unused CSS class (`Resume.vue:447`)

`.profile-section` is defined with styles but never applied to any element in the template. Remove it.

---

### 19. Typos in content data

| File | Line | Issue |
|---|---|---|
| `About.vue` | 35 | `"Contact  Details"` — double space |
| `About.vue` | 79 | `"Dunsam Academy"` — Resume.vue says `"Dungsam Academy"` |
| `About.vue` | 149 | `"Deployingand"` — missing space |
| `About.vue` | 149 | `"Practise"` — should be `"Practice"` |

---

## UI / UX

### 20. No keyboard or focus support on the modal (`Home.vue`)

The project detail modal has no Escape key handler and no focus trap. When the modal opens, keyboard focus stays on the card behind it.

```js
mounted() {
  window.addEventListener('keydown', this.handleKeydown)
},
beforeUnmount() {
  window.removeEventListener('keydown', this.handleKeydown)
},
methods: {
  handleKeydown(e) {
    if (e.key === 'Escape' && this.showDialog) this.closeDialog()
  }
}
```

---

### 21. Fixed `p-20` padding with no responsive breakpoint (`About.vue`, `SkillsPage.vue`)

Both pages use `p-20` (80px on all sides) with no responsive override. On mobile this leaves almost no usable content width. Match the pattern used in other pages:

```html
<div class="p-4 md:p-8 lg:p-20 ...">
```

---

### 22. Close button is `<strong>X</strong>` (`Home.vue:37`)

This is visually inconsistent with the rest of the design. Replace with a proper SVG icon:

```html
<button @click="closeDialog" aria-label="Close">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
```

---

### 23. Autoplay doesn't pause when the user hovers (`Certificates.vue`)

The slideshow keeps advancing even when someone is trying to read a certificate. Add pause-on-hover:

```html
<div @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
  <!-- slideshow content -->
</div>
```

---

### 24. Resume download button uses `bg-blue-900` (`Resume.vue:4`)

Every other interactive element in the app uses `bg-cyan-*`. This is the only `blue-900` element — change to `bg-cyan-700` to match the design system.

---

### 25. Non-specific `alt` attributes throughout

| Current | Should be |
|---|---|
| `alt="Tech Logo"` | `alt="${skill.name} logo"` |
| `alt="Project Thumbnail"` | `alt="${project.title}"` |
| `alt="Profile Picture"` | ✓ Fine |

---

### 26. `LandingPage.vue` background conflicts with `App.vue`

`LandingPage` sets `bg-gray-900` on its root `<div>`, which covers the animated background image defined in `App.vue`. This is likely intentional for the landing page, but confirm it's deliberate — if you want the global background to show through on the landing page, remove `bg-gray-900` from it.

---

### 27. Skill rating bar can overflow if rating > 10 (`SkillsPage.vue:11`)

```js
// Fragile
:style="{ width: skill.rating * 10 + '%' }"

// Safe
:style="{ width: Math.min(skill.rating, 10) * 10 + '%' }"
```

---

## Priority Summary

| Priority | # | Issue |
|---|---|---|
| **Critical** | 1 | EmailJS keys hardcoded in source |
| **High** | 2 | `v-html` XSS pattern |
| **High** | 6 | `canvas.toDataURL()` called in loop (memory) |
| **High** | 11 | Duplicate image import (bug — wrong cert shown) |
| **Medium** | 5 | All cert images eager-loaded (bundle size) |
| **Medium** | 12 | Career data duplicated across 3 files |
| **Medium** | 4 | External logo URLs that can break |
| **Medium** | 15 | Navbar active state not route-derived |
| **Medium** | 20 | No modal keyboard handling (accessibility) |
| **Low** | 13, 14, 16, 18 | Dead code, console.log, unused CSS, gaps in naming |
| **Low** | 21–27 | Responsive padding, alt text, button styling, autoplay |
