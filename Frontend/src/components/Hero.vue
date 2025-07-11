<script setup>
import { onMounted } from 'vue'
import profileImage from '@/assets/foto-kampus.jpg'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<template>
  <section
    id="profil"
    class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pb-24"
  >
    <!-- Enhanced background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-radial-gradient"></div>
      <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center relative z-10 gap-12">
      <!-- Left Column -->
      <div class="md:w-1/2 space-y-8">
        <h1 class="animate-on-scroll text-5xl md:text-6xl font-bold leading-tight">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-text-shine">
            Gede Brawidya<br>Puja Dharma
          </span>
        </h1>
        
        <div class="animate-on-scroll" style="transition-delay: 100ms">
          <div class="h-1 w-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full mb-6"></div>
        </div>
        
        <p class="animate-on-scroll text-xl text-gray-300/90 max-w-lg leading-relaxed" style="transition-delay: 200ms">
          Berinovasi di persimpangan teknologi dan desain. 
          Mahasiswa Ilmu Komputer yang bersemangat menciptakan pengalaman digital yang imersif.
        </p>
        
        <div class="flex flex-wrap gap-4 mt-6">
          <a
            href="#kontak"
            class="animate-on-scroll group relative overflow-hidden bg-transparent border-2 border-cyan-400 text-cyan-400 font-medium py-3 px-8 rounded-full hover:text-white transition-all duration-500 inline-flex items-center gap-2"
            style="transition-delay: 300ms"
          >
            <span class="relative z-10">Hubungi Saya</span>
            <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          
          <a
            href="#proyek"
            class="animate-on-scroll group relative overflow-hidden bg-gray-800/50 border border-gray-700 text-white font-medium py-3 px-8 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-500 inline-flex items-center gap-2"
            style="transition-delay: 350ms"
          >
            <span class="relative z-10">Lihat Proyek</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Column -->
      <div class="md:w-1/2 flex justify-center relative">
        <div class="relative">
          <!-- Enhanced glow effect -->
          <div class="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl opacity-30 animate-pulse"></div>
          
          <!-- Profile image with improved border -->
          <div class="animate-on-scroll relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-transparent p-1 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 group"
               style="transition-delay: 400ms">
            <div class="w-full h-full rounded-full overflow-hidden border-4 border-gray-900 relative">
              <img
                :src="profileImage"
                alt="Foto Profil"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span class="text-white font-medium"></span>
              </div>
            </div>
          </div>
          
          <!-- Enhanced floating tech badges -->
          <div class="absolute -bottom-6 -left-6 animate-float">
            <div class="bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-xl border border-gray-700/50 hover:border-cyan-400 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform duration-300">
                AI
              </div>
            </div>
          </div>
          
          <div class="absolute -top-6 -right-6 animate-float" style="animation-delay: 1s">
            <div class="bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-xl border border-gray-700/50 hover:border-purple-400 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform duration-300">
                UI
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
  background: radial-gradient(circle at 70% 30%, rgba(56,182,255,0.15) 0%, transparent 60%);
}

/* Animation classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.animate-text-shine {
  background-size: 200% auto;
  animation: textShine 3s ease-in-out infinite alternate;
}

@keyframes textShine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 100% center;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Fix untuk garis bawah */
section {
  position: relative;
  overflow: hidden;
  padding-bottom: 1px; /* Tambahkan sedikit padding bottom */
}

/* Alternatif efek fade bawah */
/*
section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5));
  z-index: 1;
}
*/
</style>