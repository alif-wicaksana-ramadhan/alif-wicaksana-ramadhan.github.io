<template>
    <div class="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 min-h-screen text-white">
      <nav class="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div class="text-3xl font-bold text-yellow-300 hover:text-yellow-100 transition-transform transform hover:scale-105 cursor-pointer">
          <NuxtLink href="/">
          {{ jsonData.name }}
          </NuxtLink>
        </div>
        <div>
          <ul class="hidden md:flex space-x-6">
            <li><a href="#about" class="hover:text-yellow-100 transition-colors">About</a></li>
            <li><a href="#education" class="hover:text-yellow-100 transition-colors">Education</a></li>
            <li><a href="#experience" class="hover:text-yellow-100 transition-colors">Experience</a></li>
            <li><a href="#skills" class="hover:text-yellow-100 transition-colors">Skills</a></li>
            <li><a href="#projects" class="hover:text-yellow-100 transition-colors">Projects</a></li>
          </ul>
          <button @click="toggleMenu" class="md:hidden text-yellow-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div v-if="showMenu" class="md:hidden bg-blue-700 p-4">
        <ul class="space-y-4">
          <li><a href="#about" class="block hover:text-yellow-100">About</a></li>
          <li><a href="#education" class="block hover:text-yellow-100">Education</a></li>
          <li><a href="#experience" class="block hover:text-yellow-100">Experience</a></li>
          <li><a href="#skills" class="block hover:text-yellow-100">Skills</a></li>
          <li><a href="#projects" class="block hover:text-yellow-100">Projects</a></li>
        </ul>
      </div>

    <slot>
    </slot>

      <footer class="text-center py-10 px-4">
        <p class="text-lg md:text-xl text-yellow-300">Connect with me on <a :href="jsonData.social.linkedin" class="text-yellow-100 hover:underline">LinkedIn</a> | © {{ new Date().getFullYear() }} {{ jsonData.name }}</p>
      </footer>
  </div>
</template>

<script setup lang="ts">
import jsonData from '@/assets/profileData.json';


</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
a:hover {
  color: #ffeb3b;
}

.bg-blue-600 {
  background-color: #1e3a8a;
}

.bg-blue-700 {
  background-color: #1d4ed8;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa);
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  .max-w-5xl {
    max-width: 100%;
  }
}
</style>