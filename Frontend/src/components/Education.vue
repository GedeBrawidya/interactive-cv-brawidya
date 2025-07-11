<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import SectionTitle from '@/components/SectionTitle.vue'

const educationHistory = ref([])
const achievements = ref([])
const experiences = ref([])
const activeTab = ref('education')
const isLoading = ref(true)
const error = ref(null)

// Sort functions
const sortByDateDesc = (a, b) => new Date(b.period.split('-')[1]) - new Date(a.period.split('-')[1])
const sortByYearDesc = (a, b) => b.year - a.year

// Computed properties for sorted data
const sortedEducation = computed(() => [...educationHistory.value].sort(sortByDateDesc))
const sortedAchievements = computed(() => [...achievements.value].sort(sortByYearDesc))
const sortedExperiences = computed(() => [...experiences.value].sort(sortByDateDesc))

onMounted(async () => {
  try {
    const [eduRes, achRes, expRes] = await Promise.all([
      axios.get('http://localhost:3000/api/education'),
      axios.get('http://localhost:3000/api/achievements'),
      axios.get('http://localhost:3000/api/experiences')
    ])

    if (eduRes.data.success) educationHistory.value = eduRes.data.data
    if (achRes.data.success) achievements.value = achRes.data.data
    if (expRes.data.success) experiences.value = expRes.data.data
    
    // Initialize showDetails for each education item
    educationHistory.value = educationHistory.value.map(edu => ({
      ...edu,
      showDetails: false
    }))
    
    // Initialize showResponsibilities for each experience
    experiences.value = experiences.value.map(exp => ({
      ...exp,
      showResponsibilities: false
    }))
    
  } catch (err) {
    console.error('Failed to fetch profile data:', err)
    error.value = 'Failed to load profile data. Please try again later.'
  } finally {
    isLoading.value = false
  }
})

const setActiveTab = (tab) => {
  activeTab.value = tab
}

const loadData = () => {
  isLoading.value = true
  error.value = null
  onMounted()
}
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
    <!-- Enhanced background elements - gradient direction changed to top-left -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-radial-gradient"></div>
      <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-cyan-500/5 blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <SectionTitle>
          <template #title>PROFIL SAYA</template>
          <template #subtitle>Perjalanan pendidikan, pencapaian, dan pengalaman profesional</template>
        </SectionTitle>
      </div>

      <!-- Tab Navigation -->
      <div class="flex justify-center mb-12">
        <div 
          role="tablist" 
          aria-label="Profile sections"
          class="inline-flex rounded-full bg-gray-800/70 p-1 shadow-inner border border-gray-700/50 backdrop-blur-sm"
        >
          <button
            v-for="tab in [
              { id: 'education', label: 'Pendidikan', icon: 'graduation-cap' },
              { id: 'achievements', label: 'Prestasi', icon: 'trophy' },
              { id: 'experiences', label: 'Pengalaman', icon: 'briefcase' }
            ]"
            :key="tab.id"
            @click="setActiveTab(tab.id)"
            :aria-selected="activeTab === tab.id"
            :aria-controls="`${tab.id}-panel`"
            role="tab"
            :class="{
              'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg': activeTab === tab.id,
              'text-gray-300 hover:text-white bg-transparent': activeTab !== tab.id
            }"
            class="px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base focus:outline-none flex items-center gap-2"
          >
            <i :class="`fas fa-${tab.icon} text-sm`"></i>
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12 bg-red-900/20 rounded-lg border border-red-700/50">
        <i class="fas fa-exclamation-triangle text-red-400 text-3xl mb-4"></i>
        <p class="text-red-300">{{ error }}</p>
        <button 
          @click="loadData()" 
          class="mt-4 px-4 py-2 bg-red-700/50 hover:bg-red-700/70 rounded-lg transition-colors"
        >
          Retry
        </button>
      </div>

      <!-- Education Panel -->
      <div 
        v-show="activeTab === 'education'" 
        id="education-panel"
        role="tabpanel"
        aria-labelledby="education-tab"
        class="relative"
      >
        <!-- Vertical timeline line (centered) -->
        <div class="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500/30 via-cyan-500/50 to-blue-500/30 transform -translate-x-1/2"></div>
        
        <div class="space-y-12">
          <div
            v-for="(edu, index) in sortedEducation"
            :key="edu.id"
            class="relative flex flex-col md:flex-row items-start group"
          >
            <!-- Centered Dot -->
            <div class="absolute left-1/2 -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center">
              <div class="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <div class="w-3 h-3 rounded-full bg-white z-20"></div>
                <div class="absolute w-full h-full rounded-full bg-cyan-400/30 opacity-0 group-hover:opacity-100 animate-ping duration-1000"></div>
              </div>
            </div>
            
            <!-- Education Cards (alternating sides) -->
            <div
              class="w-full md:w-5/12 mt-8 md:mt-0 p-6 bg-gray-800/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 group-hover:-translate-y-1 text-white"
              :class="{
                'md:mr-auto md:pr-12': index % 2 === 0,
                'md:ml-auto md:pl-12': index % 2 !== 0
              }"
            >
              <span class="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-gray-700/70 rounded-full mb-2">
                {{ edu.period }}
              </span>
              <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{{ edu.institution }}</h3>
              <p class="text-gray-200 mb-2">{{ edu.major }}</p>
              <p class="text-sm text-gray-300">{{ edu.description }}</p>
              
              <div v-if="edu.additional" class="mt-3">
                <button 
                  @click="edu.showDetails = !edu.showDetails"
                  class="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <i :class="`fas fa-chevron-${edu.showDetails ? 'up' : 'down'}`"></i>
                  {{ edu.showDetails ? 'Less details' : 'More details' }}
                </button>
                <div v-if="edu.showDetails" class="mt-2 text-xs text-gray-300">
                  <p>{{ edu.additional }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Achievements Panel -->
      <div 
        v-show="activeTab === 'achievements'" 
        id="achievements-panel"
        role="tabpanel"
        aria-labelledby="achievements-tab"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div 
          v-for="(achievement, index) in sortedAchievements" 
          :key="achievement.id"
          class="group relative overflow-hidden bg-gray-800/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 hover:-translate-y-1"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <div class="p-6 text-white">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-gray-700/70 flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors">
                <i class="fas fa-trophy text-cyan-400"></i>
              </div>
              <div>
                <span class="text-xs font-semibold text-cyan-400 bg-gray-700/70 px-2 py-1 rounded">
                  {{ achievement.year }}
                </span>
                <span v-if="achievement.category" class="ml-2 text-xs font-semibold text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
                  {{ achievement.category }}
                </span>
              </div>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{{ achievement.title }}</h3>
            <p class="text-gray-300 text-sm mb-3">{{ achievement.description }}</p>
            
            <a 
              v-if="achievement.link"
              :href="achievement.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
            >
              <i class="fas fa-external-link-alt"></i>
              View details
            </a>
          </div>
        </div>
      </div>

      <!-- Experiences Panel - Fixed layout -->
      <div 
        v-show="activeTab === 'experiences'" 
        id="experiences-panel"
        role="tabpanel"
        aria-labelledby="experiences-tab"
        class="relative"
      >
        <!-- Vertical timeline line (centered) -->
        <div class="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500/30 via-cyan-500/50 to-blue-500/30 transform -translate-x-1/2"></div>
        
        <div class="space-y-12">
          <div
            v-for="(experience, index) in sortedExperiences"
            :key="experience.id"
            class="relative flex flex-col md:flex-row items-start group"
          >
            <!-- Centered Dot -->
            <div class="absolute left-1/2 -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center">
              <div class="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <div class="w-3 h-3 rounded-full bg-white z-20"></div>
                <div class="absolute w-full h-full rounded-full bg-cyan-400/30 opacity-0 group-hover:opacity-100 animate-ping duration-1000"></div>
              </div>
            </div>
            
            <!-- Experience Cards (alternating sides) -->
            <div
              class="w-full md:w-5/12 mt-8 md:mt-0 p-6 bg-gray-800/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 group-hover:-translate-y-1 text-white"
              :class="{
                'md:mr-auto md:pr-12': index % 2 === 0,
                'md:ml-auto md:pl-12': index % 2 !== 0
              }"
            >
              <span class="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-gray-700/70 rounded-full mb-2">
                {{ experience.period }}
              </span>
              <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{{ experience.position }}</h3>
              <p class="text-gray-200 mb-2 flex items-center gap-2">
                <i class="fas fa-building text-gray-400"></i>
                {{ experience.company }}
                <span v-if="experience.location" class="text-xs text-gray-400 flex items-center gap-1">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ experience.location }}
                </span>
              </p>
              <p class="text-sm text-gray-300">{{ experience.description }}</p>
              
              <div v-if="experience.skills && experience.skills.length" class="mt-3 flex flex-wrap gap-2">
                <span 
                  v-for="skill in experience.skills" 
                  :key="skill"
                  class="px-2 py-1 text-xs rounded-full bg-gray-700/70 text-cyan-400"
                >
                  {{ skill }}
                </span>
              </div>
              
              <div v-if="experience.responsibilities" class="mt-3">
                <button 
                  @click="experience.showResponsibilities = !experience.showResponsibilities"
                  class="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <i :class="`fas fa-chevron-${experience.showResponsibilities ? 'up' : 'down'}`"></i>
                  {{ experience.showResponsibilities ? 'Hide responsibilities' : 'Show responsibilities' }}
                </button>
                <ul v-if="experience.showResponsibilities" class="mt-2 text-xs text-gray-300 space-y-1 pl-4">
                  <li v-for="(resp, i) in experience.responsibilities" :key="i" class="list-disc">
                    {{ resp }}
                  </li>
                </ul>
              </div>
            </div>
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
  background: radial-gradient(circle at 20% 20%, rgba(56,182,255,0.15) 0%, transparent 60%);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

/* Custom hover transitions */
.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:scale-125 {
  transform: scale(1.25);
}

.group:hover .group-hover\:text-cyan-400 {
  color: #22d3ee;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(6,182,212,0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(6,182,212,0.8);
}

/* Smooth transitions for all interactive elements */
a, button {
  transition: all 0.3s ease;
}

/* Consistent card styling */
.bg-gray-800\/50 {
  background-color: rgba(31, 41, 55, 0.5);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Remove outline and add focus-visible styles */
button:focus, a:focus {
  outline: none;
}

button:focus-visible, a:focus-visible {
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.5);
}
</style>