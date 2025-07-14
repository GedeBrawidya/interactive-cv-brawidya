<template>
  <header class="fixed w-full top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800 shadow-lg animate-fade-in">
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
      <!-- Logo dengan efek gradient -->
      <div class="text-2xl font-bold">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
          Brawidya
        </span>
      </div>
      
      <!-- Menu navigasi -->
      <ul class="hidden md:flex space-x-8">
        <li>
          <a 
            href="#profil" 
            class="relative text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <span>Profil</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a 
            href="#profil" 
            class="relative text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <span>Pendidikan</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a 
            href="#skill" 
            class="relative text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <span>Skill</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a 
            href="#proyek" 
            class="relative text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <span>Proyek</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a 
            href="#kontak" 
            class="relative text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <span>Kontak</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button class="md:hidden text-gray-300 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Efek scroll untuk navbar
  const header = document.querySelector('header')
  let lastScroll = 0
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    if (currentScroll <= 0) {
      header.classList.remove('scrolled')
      return
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('scrolled-down')
      header.classList.remove('scrolled-up')
    } else {
      header.classList.add('scrolled-up')
      header.classList.remove('scrolled-down')
    }
    lastScroll = currentScroll
  })
})
</script>

<style scoped>
/* Animasi fade-in */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efek scroll navbar */
.scrolled-up {
  transform: translateY(0);
  transition: transform 0.3s ease-out;
}

.scrolled-down {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in;
}

/* Efek glass morphism */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

/* Garis bawah animasi */
.group:hover span.absolute {
  width: 100%;
}
</style>