<template>
  <div class="p-4 md:p-8 lg:p-20 space-y-6">
    <h1 class="text-4xl font-bold mb-4 text-cyan-600 text-center">Skills</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="(skill, index) in skills" :key="index"
        class="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg text-white bg-opacity-60">
        <img :src="skill.logo" :alt="skill.name + ' logo'" loading="lazy" class="w-16 h-16 mb-4 object-contain" />
        <h2 class="text-xl font-bold mb-2">{{ skill.name }}</h2>
        <div class="w-full bg-gray-600 rounded-full h-2 mb-4">
          <div :style="{ width: Math.min(skill.rating, 10) * 10 + '%' }" class="bg-cyan-600 h-full rounded-full"></div>
        </div>
        <p class="text-sm text-gray-300">{{ skill.rating }} / 10</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsPage',
  data() {
    return {
      skills: [
        { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', rating: 5 },
        { name: 'Phoenix', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/254_Phoenix_Framework_logo-512.png', rating: 5 },
        { name: 'Elixir', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Official_Elixir_logo.png', rating: 5 },
        { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', rating: 9 },
        { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', rating: 8 },
        { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', rating: 8 },
        { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg', rating: 7 },
        { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', rating: 8 },
        { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', rating: 9 },
        { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', rating: 5 },
        { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', rating: 3 },
        { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg', rating: 7 },
        { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', rating: 7 },
        { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg', rating: 6 },
        { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', rating: 6 },
        { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', rating: 6 },
        { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', rating: 7 },
        { name: 'Google Sheets', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg', rating: 8 },
        { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg', rating: 8 },
        { name: 'Data Analytics', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg', rating: 9 },
      ]
    };
  }
};
</script>
