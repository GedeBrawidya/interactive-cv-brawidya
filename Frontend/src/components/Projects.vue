<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

// Import semua gambar dari assets
import tokoOnlineImg from '@/assets/Website-toko-online.jpeg'
import managementTugasImg from '@/assets/website-management-tugas.jpeg'
import kampusImg from '@/assets/foto-kampus.jpg'
import karangTarunaImg from '@/assets/website-karang-taruna.png'
import rackImg from '@/assets/rack.jpg'
import placeholderImg from '@/assets/logo_amikom.png' // Sebagai fallback

const projects = ref([])
const currentIndex = ref(0)
const scrollInterval = ref(null)
const scrollContainer = ref(null)
const isLoading = ref(true)
const error = ref(null)

// Mapping nama proyek ke gambar lokal
const projectImageMap = {
  'Website Toko Online': tokoOnlineImg,
  'Aplikasi Manajemen Tugas': managementTugasImg,
  'Website Portofolio Interaktif': kampusImg,
  'Manajemen Organisasi Karang Taruna': karangTarunaImg,
  'Sistem RACK CLI (C++)': rackImg
}

const fetchProjects = async () => {
  try {
    const response = await axios.get('https://interactive-cv-brawidya-production.up.railway.app/api/projects')
    let data = response.data.data || response.data
    
    if (Array.isArray(data)) {
      projects.value = data
    } else if (typeof data === 'object' && data !== null) {
      projects.value = Object.values(data)
    }
    
    // Gabungkan data backend dengan gambar lokal
    projects.value = projects.value.map(project => {
      return {
        ...project,
        // Gunakan gambar lokal jika ada mappingnya, jika tidak gunakan placeholder
        localImage: projectImageMap[project.title] || placeholderImg,
        // Simpan juga gambar dari backend jika ada
        backendImage: project.image 
      }
    })
    
  } catch (err) {
    console.error('Error fetching projects:', err)
    error.value = 'Gagal memuat proyek. Silakan coba lagi nanti.'
    
    // Fallback ke data statis dengan gambar lokal
    projects.value = [
      {
        id: 1,
        title: 'Website Toko Online',
        description: 'Platform e-commerce dengan fitur keranjang belanja',
        tech: ['Vue.js', 'Express.js'],
        link: '#',
        category: 'E-Commerce',
        localImage: tokoOnlineImg
      },
      {
        id: 2,
        title: 'Aplikasi Manajemen Tugas', 
        description: 'Aplikasi untuk melacak progres tugas harian',
        tech: ['React', 'Firebase'],
        link: '#',
        category: 'Productivity',
        localImage: managementTugasImg
      }
    ]
  } finally {
    isLoading.value = false
  }
}

// Fungsi-fungsi carousel
const startAutoScroll = () => {
  if (projects.value.length <= 1) return
  stopAutoScroll()
  scrollInterval.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % projects.value.length
    scrollToProject(currentIndex.value)
  }, 3000)
}

const stopAutoScroll = () => {
  if (scrollInterval.value) {
    clearInterval(scrollInterval.value)
    scrollInterval.value = null
  }
}

const scrollToProject = (index) => {
  if (scrollContainer.value && projects.value.length > 0) {
    const container = scrollContainer.value
    const projectItem = container.querySelector('.project-item')
    if (projectItem) {
      const projectWidth = projectItem.offsetWidth
      const scrollPosition = index * (projectWidth + 32)
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }
}

onMounted(async () => {
  await fetchProjects()
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<template>
  <section id="proyek" class="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <!-- Background elements -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionTitle>
        <template #title>PROYEK UNGGULAN</template>
        <template #subtitle>Karya terbaik yang telah saya selesaikan</template>
      </SectionTitle>

      <!-- Konten proyek -->
      <div class="relative mt-12">
        <div 
          ref="scrollContainer"
          class="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
        >
          <div 
            v-for="(project, index) in projects"
            :key="project.id"
            class="flex-shrink-0 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-4 transition-transform duration-300 hover:scale-105 project-item snap-start"
          >
            <div class="bg-gray-800/50 rounded-xl shadow-lg overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 h-full flex flex-col">
              <!-- Gunakan localImage yang sudah diimport -->
              <div class="relative overflow-hidden h-48">
                <img
                  :src="project.localImage"
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-gray-900/70 rounded-full">
                    {{ project.category || 'Uncategorized' }}
                  </span>
                </div>
              </div>
              
              <!-- Konten teks dari backend -->
              <div class="p-6 flex-grow flex flex-col">
                <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-300 mb-4 flex-grow">{{ project.description }}</p>
                
                <div class="mb-4 flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in project.tech || []"
                    :key="techIndex"
                    class="inline-block px-2.5 py-0.5 text-xs rounded-full bg-gray-700/70 text-cyan-400"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <div class="flex gap-2">
                  <a
                    v-if="project.link && project.link !== '#'"
                    :href="project.link"
                    target="_blank"
                    class="mt-auto inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 rounded-lg text-white font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg flex-1"
                  >
                    Lihat Demo
                  </a>
                  <a
                    v-if="project.githubLink"
                    :href="project.githubLink"
                    target="_blank"
                    class="mt-auto inline-flex items-center justify-center px-4 py-2 bg-gray-700/70 rounded-lg text-white font-medium hover:bg-gray-600 transition-all duration-300 hover:shadow-lg flex-1"
                  >
                    <i class="fab fa-github mr-2"></i>
                    Kode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.snap-x {
  scroll-snap-type: x mandatory;
}
.snap-start {
  scroll-snap-align: start;
}
</style>