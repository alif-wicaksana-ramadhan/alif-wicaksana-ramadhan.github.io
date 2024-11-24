<template>
  <div class="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 min-h-screen text-white">
    <nav class="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div class="text-3xl font-bold text-yellow-300 hover:text-yellow-100 transition-transform transform hover:scale-105 cursor-pointer">
        {{ jsonData.name }}
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

    <header class="text-center mt-20 mb-10 px-4">
      <div class="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 transition-transform transform hover:scale-105">
        <img :src="jsonData.photo" alt="{{ jsonData.name }}" class="w-full h-full object-cover">
      </div>
      <h1 class="text-5xl md:text-6xl font-extrabold text-yellow-300">{{ jsonData.name }}</h1>
      <p class="mt-4 text-lg md:text-xl text-gray-200">
        {{ jsonData.contact.phone }} | <a :href="'mailto:' + jsonData.contact.email" class="text-yellow-100 hover:underline">{{ jsonData.contact.email }}</a>
      </p>
      <p class="text-xl md:text-2xl text-yellow-200 mt-2">{{ jsonData.title }}</p>
    </header>

    <section id="about" class="text-center mb-16 max-w-4xl mx-auto px-4">
      <p class="text-lg md:text-2xl text-gray-200">{{ jsonData.about }}</p>
    </section>

    <section id="education" class="bg-blue-600 text-white rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16 px-4">
      <h2 class="text-3xl md:text-4xl font-bold border-b-4 border-yellow-300 pb-2 mb-6 text-center">Education</h2>
      <ul class="space-y-4">
        <li v-for="education in jsonData.education" :key="education.institution">
          <strong class="text-yellow-200">{{ education.institution }}</strong> - {{ education.degree }} ({{ education.years }})
        </li>
      </ul>
    </section>

    <section id="experience" class="bg-blue-600 text-white rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16 px-4">
      <h2 class="text-3xl md:text-4xl font-bold border-b-4 border-yellow-300 pb-2 mb-6 text-center">Experiences</h2>
      <ul class="space-y-6">
        <li v-for="experience in jsonData.experience" :key="experience.company">
          <strong class="text-yellow-200">{{ experience.position }}</strong> - {{ experience.company }} ({{ experience.period }})
        </li>
      </ul>
    </section>

    <section id="skills" class="bg-blue-600 text-white rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16 px-4">
      <h2 class="text-3xl md:text-4xl font-bold border-b-4 border-yellow-300 pb-2 mb-6 text-center">Technical Skills</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li v-for="skill in jsonData.skills" :key="skill" class="bg-blue-500 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">{{ skill }}</li>
      </ul>
    </section>

    <section id="projects" class="bg-blue-600 text-white rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16 px-4">
      <h2 class="text-3xl md:text-4xl font-bold border-b-4 border-yellow-300 pb-2 mb-6 text-center">Projects</h2>
      <ul class="space-y-6">
        <li v-for="project in jsonData.projects" :key="project.name" class="transition-transform transform hover:scale-105">
          <strong class="text-yellow-200">{{ project.name }}</strong> - {{ project.role }} ({{ project.period }})
          <p class="text-sm text-yellow-100 mt-1">{{ project.description }}</p>
        </li>
      </ul>
    </section>

    <footer class="text-center py-10 px-4">
      <p class="text-lg md:text-xl text-yellow-300">Connect with me on <a :href="jsonData.social.linkedin" class="text-yellow-100 hover:underline">LinkedIn</a> | © {{ new Date().getFullYear() }} {{ jsonData.name }}</p>
    </footer>
  </div>
</template>

<script>
import jsonData from '@/assets/profileData.json';

export default {
  name: 'CvLandingPage',
  data() {
    return {
      jsonData,
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
  mounted() {
    console.log(jsonData.photo);
  }
};
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