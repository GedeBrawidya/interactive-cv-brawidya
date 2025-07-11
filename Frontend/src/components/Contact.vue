<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <!-- Enhanced background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-radial-gradient"></div>
      <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 blur-3xl"></div>
      <div class="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 filter blur-3xl animate-float"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <SectionTitle>
        <template #title>HUBUNGI SAYA</template>
        <template #subtitle>Tertarik bekerja sama? Mari berkolaborasi!</template>
      </SectionTitle>
      
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-on-scroll" style="transition-delay: 100ms">
        Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kerja sama, atau sekadar berbagi ide.
      </p>

      <div class="animate-on-scroll" style="transition-delay: 200ms">
        <a 
          href="mailto:enxyest@gmail.com" 
          class="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 mb-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span class="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span class="relative z-10">Kirim Email</span>
          <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span class="absolute -inset-1 bg-white/10 rounded-lg filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </a>
      </div>

      <div class="flex justify-center space-x-8 mb-12 animate-on-scroll" style="transition-delay: 300ms">
        <a 
          href="https://github.com/GedeBrawidya" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors duration-300 flex flex-col items-center group"
          aria-label="GitHub Profile"
        >
          <div class="w-14 h-14 rounded-full bg-gray-800/70 border border-gray-700/50 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300 mb-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-sm">GitHub</span>
        </a>

        <a 
          href="https://www.linkedin.com/in/gede-brawidya-puja-dharma-6b4889322/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors duration-300 flex flex-col items-center group"
          aria-label="LinkedIn Profile"
        >
          <div class="w-14 h-14 rounded-full bg-gray-800/70 border border-gray-700/50 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 mb-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <span class="text-sm">LinkedIn</span>
        </a>
      </div>

      <div class="border-t border-gray-800/50 pt-8 animate-on-scroll" style="transition-delay: 400ms">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} <span class="text-cyan-400">Brawidya</span> · Dibuat dengan <span class="text-red-400">❤️</span> dan Vue.js
        </p>
      </div>
    </div>
  </footer>
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

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(10px); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

/* Animation for scroll-triggered elements */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Custom glow effect on hover */
.group:hover .group-hover\:glow {
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
}

/* Smooth transitions for all interactive elements */
a, button {
  transition: all 0.3s ease;
}

/* Remove outline and add focus-visible styles */
button:focus, a:focus {
  outline: none;
}

button:focus-visible, a:focus-visible {
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.5);
}
</style>