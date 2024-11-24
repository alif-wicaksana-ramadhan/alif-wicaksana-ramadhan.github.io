<template>
  <div class="bg-gradient-to-r from-black to-gray-900 min-h-screen text-white">
    <nav class="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div class="text-3xl font-bold text-cyan-400">{{ jsonData.name }}</div>
      <div>
        <ul class="flex space-x-6">
          <li><a href="#about" class="hover:text-cyan-200 transition-colors">About</a></li>
          <li><a href="#education" class="hover:text-cyan-200 transition-colors">Education</a></li>
          <li><a href="#experience" class="hover:text-cyan-200 transition-colors">Experience</a></li>
          <li><a href="#skills" class="hover:text-cyan-200 transition-colors">Skills</a></li>
          <li><a href="#projects" class="hover:text-cyan-200 transition-colors">Projects</a></li>
        </ul>
      </div>
    </nav>

    <header class="text-center mt-20 mb-10">
      <div class="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
        <img :src="jsonData.photo" alt="{{ jsonData.name }}" class="w-full h-full object-cover">
      </div>
      <h1 class="text-6xl font-extrabold text-cyan-400">{{ jsonData.name }}</h1>
      <p class="mt-4 text-xl text-gray-300">{{ jsonData.contact.phone }} | <a :href="'mailto:' + jsonData.contact.email" class="text-cyan-200 hover:underline">{{ jsonData.contact.email }}</a></p>
      <p class="text-2xl text-gray-400 mt-2">{{ jsonData.title }}</p>
    </header>

    <section id="about" class="text-center mb-16 max-w-4xl mx-auto">
      <p class="text-2xl text-gray-300">{{ jsonData.about }}</p>
    </section>

    <section id="education" class="bg-gray-800 text-gray-100 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-4xl font-bold border-b-4 border-cyan-400 pb-2 mb-6 text-center">Education</h2>
      <ul class="space-y-4">
        <li v-for="education in jsonData.education" :key="education.institution">
          <strong class="text-cyan-300">{{ education.institution }}</strong> - {{ education.degree }} ({{ education.years }})
        </li>
      </ul>
    </section>

    <section id="experience" class="bg-gray-800 text-gray-100 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-4xl font-bold border-b-4 border-cyan-400 pb-2 mb-6 text-center">Experiences</h2>
      <ul class="space-y-6">
        <li v-for="experience in jsonData.experience" :key="experience.company">
          <strong class="text-cyan-300">{{ experience.position }}</strong> - {{ experience.company }} ({{ experience.period }})
        </li>
      </ul>
    </section>

    <section id="skills" class="bg-gray-800 text-gray-100 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-4xl font-bold border-b-4 border-cyan-400 pb-2 mb-6 text-center">Technical Skills</h2>
      <ul class="grid grid-cols-2 gap-6">
        <li v-for="skill in jsonData.skills" :key="skill" class="bg-gray-700 p-4 rounded-lg shadow-md">{{ skill }}</li>
      </ul>
    </section>

    <section id="projects" class="bg-gray-800 text-gray-100 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-4xl font-bold border-b-4 border-cyan-400 pb-2 mb-6 text-center">Projects</h2>
      <ul class="space-y-6">
        <li v-for="project in jsonData.projects" :key="project.name">
          <strong class="text-cyan-300">{{ project.name }}</strong> - {{ project.role }} ({{ project.period }})
          <p class="text-sm text-gray-400">{{ project.description }}</p>
        </li>
      </ul>
    </section>

    <footer class="text-center py-10">
      <p class="text-xl text-cyan-400">Connect with me on <a :href="jsonData.social.linkedin" class="text-cyan-200 hover:underline">LinkedIn</a> | © {{ new Date().getFullYear() }} {{ jsonData.name }}</p>
    </footer>
  </div>
</template>

<script>
import jsonData from '@/assets/profileData.json';

export default {
  name: 'CvLandingPage',
  data() {
    return {
      jsonData
    };
  },
  mounted() {
    console.log(jsonData.photo)
  }
};
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
a:hover {
  color: #00e5ff;
}

.bg-gray-800 {
  background-color: #2d2d2d;
}

.bg-gray-700 {
  background-color: #3a3a3a;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, #000000, #1c1c1c);
}
</style>
