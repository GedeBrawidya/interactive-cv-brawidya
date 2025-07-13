<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios' 
import SectionTitle from './SectionTitle.vue'

const projects = ref([])
const currentIndex = ref(0)
const scrollInterval = ref(null)
const scrollContainer = ref(null)
const isLoading = ref(true)
const error = ref(null)

const fetchProjects = async (req, res) => {
  try {
    const response = await axios.get('https://interactive-cv-brawidya-production.up.railway.app/api/projects');
    return response.data.data;
  } catch (err) {
    console.error('Error fetching projects:', err)
    error.value = 'Failed to load projects'
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await fetchProjects()
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})

const startAutoScroll = () => {
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
  if (scrollContainer.value) {
    const container = scrollContainer.value
    const projectWidth = container.querySelector('.project-item').offsetWidth
    const scrollPosition = index * (projectWidth + 32)
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }
}

const handleMouseEnter = () => {
  stopAutoScroll()
}

const handleMouseLeave = () => {
  startAutoScroll()
}
</script>

<template>
  <section id="proyek" class="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-radial-gradient"></div>
      <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionTitle>
        <template #title>PROYEK UNGGULAN</template>
        <template #subtitle>Karya terbaik yang telah saya selesaikan</template>
      </SectionTitle>

      <!-- Loading indicator -->
      <div v-if="isLoading" class="flex justify-center py-10">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12 bg-red-900/20 rounded-lg border border-red-700/50 mb-8">
        <i class="fas fa-exclamation-triangle text-red-400 text-3xl mb-4"></i>
        <p class="text-red-300">{{ error }}</p>
      </div>

      <!-- Horizontal scrolling container -->
      <div 
        v-if="!isLoading"
        class="relative mt-12"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div 
          ref="scrollContainer"
          class="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
        >
          <div 
            v-for="(project, index) in projects"
            :key="index"
            class="flex-shrink-0 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-4 transition-transform duration-300 hover:scale-105 project-item snap-start"
          >
            <div class="bg-gray-800/50 rounded-xl shadow-lg overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 h-full flex flex-col">
              <!-- Project image with gradient overlay -->
              <div class="relative overflow-hidden h-48">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-gray-900/70 rounded-full">
                    {{ project.category }}
                  </span>
                </div>
              </div>
              
              <!-- Project content -->
              <div class="p-6 flex-grow flex flex-col">
                <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-300 mb-4 flex-grow">{{ project.description }}</p>
                
                <!-- Technologies -->
                <div class="mb-4 flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in project.tech"
                    :key="techIndex"
                    class="inline-block px-2.5 py-0.5 text-xs rounded-full bg-gray-700/70 text-cyan-400"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <!-- View buttons -->
                <div class="flex gap-2">
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-auto inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 rounded-lg text-white font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg flex-1"
                  >
                    Lihat Demo
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    v-if="project.githubLink"
                    :href="project.githubLink"
                    target="_blank"
                    rel="noopener noreferrer"
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
        
        <!-- Progress indicator -->
        <div class="flex justify-center mt-6">
          <div class="flex space-x-2">
            <button 
              v-for="(_, index) in projects" 
              :key="index"
              @click="scrollToProject(index)"
              class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none"
              :class="{
                'bg-cyan-500 w-6': currentIndex === index,
                'bg-gray-600': currentIndex !== index
              }"
              aria-label="Go to slide"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.bg-radial-gradient {
  background: radial-gradient(circle at 70% 30%, rgba(56,182,255,0.15) 0%, transparent 60%);
}

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

.project-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>