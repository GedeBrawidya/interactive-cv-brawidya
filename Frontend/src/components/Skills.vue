<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

import VueIcon from '@/assets/vue.png'
import JavascriptIcon from '@/assets/javascript.jpeg'
import TailwindIcon from '@/assets/tailiwind.png'
import NodeIcon from '@/assets/node.png'
import ExpressIcon from '@/assets/expressjs.png'
import PostgresIcon from '@/assets/postgresql.png'
import GithubIcon from '@/assets/github.jpeg'
import HtmlCssIcon from '@/assets/html-css.png'


const skills = ref([])

const staticSkills = [
  { name: 'Vue.js', level: 'Mahir', icon: VueIcon, color: 'from-emerald-500 to-teal-400' },
  { name: 'JavaScript', level: 'Mahir', icon: JavascriptIcon, color: 'from-yellow-500 to-amber-400' },
  { name: 'Tailwind CSS', level: 'Mahir', icon: TailwindIcon, color: 'from-blue-500 to-cyan-400' },
  { name: 'Node.js', level: 'Menengah', icon: NodeIcon, color: 'from-green-500 to-emerald-400' },
  { name: 'Express.js', level: 'Menengah', icon: ExpressIcon, color: 'from-gray-500 to-gray-400' },
  { name: 'PostgreSQL', level: 'Menengah', icon: PostgresIcon, color: 'from-indigo-500 to-violet-400' },
  { name: 'Git', level: 'Mahir', icon: GithubIcon, color: 'from-gray-600 to-gray-500' },
  { name: 'HTML5 & CSS3', level: 'Mahir', icon: HtmlCssIcon, color: 'from-orange-500 to-amber-400' }
]

onMounted(async () => {
  try {
    const response = await axios.get('https://interactive-cv-brawidya-production.up.railway.app/api/skills')
    if (response.data.data.length === 0) throw new Error('Empty response')
   skills.value = response.data.data.map(item => {
  const matched = staticSkills.find(s => s.name === item.name)
  return {
    ...item,
    icon: matched?.icon || '/images/default-icon.png',
    color: matched?.color || 'from-gray-500 to-gray-400',
    level: matched?.level || item.level || 'Tidak diketahui'
  }
})


  } catch (error) {
    console.error('Gagal fetch, menggunakan data statis:', error)
    skills.value = staticSkills
  }

  // Animasi scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        entry.target.classList.remove('animate-on-scroll')
      }
    })
  })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="skill" class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
    <!-- Enhanced background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-radial-gradient"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionTitle>
        <template #title>KEAHLIAN & TEKNOLOGI</template>
        <template #subtitle>Teknologi yang saya kuasai dan gunakan secara profesional</template>
      </SectionTitle>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
        <div
          v-for="(skill, index) in skills.length ? skills : staticSkills"
          :key="skill.name + index"
          class="animate-on-scroll group relative bg-gray-800/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/20 hover:-translate-y-1 flex flex-col items-center"
          :style="`transition-delay: ${index * 50}ms`"
        >
          <!-- Subtle border glow effect on hover -->
          <div class="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div class="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500/10 transition-all duration-500"></div>
            <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
            </div>
          </div>

          <!-- Skill icon with gradient background -->
          <div class="relative z-10 w-16 h-16 mb-4 rounded-full flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br opacity-70" :class="skill.color"></div>
            <img
              :src="skill.icon"
              :alt="skill.name + ' icon'"
              class="w-10 h-10 object-cover z-20"
              loading="lazy"
            />
          </div>

          <!-- Skill name and level -->
          <h3 class="text-lg font-semibold text-white text-center relative z-10 group-hover:text-cyan-300 transition-colors">{{ skill.name }}</h3>
          <div class="mt-2 text-sm text-gray-300 relative z-10">{{ skill.level }}</div>

          <!-- Subtle animated dots -->
          <div class="absolute top-3 right-3 flex space-x-1">
            <div class="w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400/70 transition-colors duration-300"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400/70 transition-colors duration-300 delay-75"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400/70 transition-colors duration-300 delay-150"></div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <p class="text-gray-400 mb-6">Tertarik bekerja sama? Saya terbuka untuk kolaborasi baru.</p>
        <a
          href="#contact"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          Hubungi Saya
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 40px 40px;
}

.bg-radial-gradient {
  background: radial-gradient(circle at 70% 30%, rgba(56,182,255,0.08) 0%, transparent 60%);
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
