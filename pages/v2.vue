# Modern Resume Website Structure

## File Structure
```
content/
├── resume.md
└── projects/
├── deep-learning-signal-denoising.md
├── object-tracking-deepsort.md
└── biometric-security-system.md

components/
├── ResumeHeader.vue
├── ResumeSection.vue
├── SkillBadge.vue
├── ExperienceCard.vue
├── PublicationCard.vue
└── ProjectCard.vue

pages/
└── index.vue
```

## Main Page Component (pages/index.vue)
```vue
<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="font-bold text-xl text-slate-800">{{ data.name }}</div>
          <div class="hidden md:flex space-x-8">
            <a v-for="section in navigation" :key="section.id"
               :href="`#${section.id}`"
               class="text-slate-600 hover:text-blue-600 transition-colors duration-200">
              {{ section.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-12 items-start">
          <!-- Main Info -->
          <div class="lg:col-span-2">
            <!-- Photo and Name Section for Mobile -->
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 lg:hidden">
              <div class="relative">
                <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-100 to-purple-100">
                  <img v-if="data.photo"
                       :src="data.photo"
                       :alt="data.name"
                       class="w-full h-full object-cover">
                  <div v-else class="w-full h-full flex items-center justify-center text-slate-400">
                    <span v-html="icons.user" class="w-16 h-16"></span>
                  </div>
                </div>
                <!-- Status indicator -->
                <div class="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg"></div>
              </div>
              <div class="text-center sm:text-left">
                <h1 class="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                  {{ data.name }}
                </h1>
                <p class="text-lg text-blue-600 font-medium mb-2">{{ data.currentRole }}</p>
                <p class="text-slate-600">{{ data.location }}</p>
              </div>
            </div>

            <!-- Desktop Name Section -->
            <div class="mb-6 hidden lg:block">
              <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                {{ data.name }}
              </h1>
            </div>

            <!-- Contact Info -->
            <div class="flex flex-wrap gap-4 text-slate-600 mb-6">
              <div class="flex items-center">
                <span v-html="icons.phone" class="mr-2"></span>
                {{ data.contact.phone }}
              </div>
              <div class="flex items-center">
                <span v-html="icons.email" class="mr-2"></span>
                {{ data.contact.email }}
              </div>
            </div>

            <!-- Summary -->
            <div class="prose prose-slate max-w-none">
              <p class="text-lg text-slate-600 leading-relaxed">
                {{ data.summary }}
              </p>
            </div>
          </div>

          <!-- Photo and Quick Info Card for Desktop -->
          <div class="space-y-6">
            <!-- Photo Card - Desktop Only -->
            <div class="hidden lg:block bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
              <div class="text-center">
                <div class="relative mx-auto mb-4">
                  <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 mx-auto">
                    <img v-if="data.photo"
                         :src="data.photo"
                         :alt="data.name"
                         class="w-full h-full object-cover">
                    <div v-else class="w-full h-full flex items-center justify-center text-slate-400">
                      <span v-html="icons.user" class="w-20 h-20"></span>
                    </div>
                  </div>
                  <!-- Status indicator -->
                  <div class="absolute bottom-2 right-8 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg"></div>
                </div>
                <h2 class="text-xl font-semibold text-slate-800 mb-1">{{ data.name }}</h2>
                <p class="text-blue-600 font-medium mb-2">{{ data.currentRole }}</p>
                <p class="text-slate-600 text-sm">{{ data.location }}</p>
              </div>
            </div>

            <!-- Quick Info Card -->
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
              <h3 class="font-semibold text-slate-800 mb-4">Quick Info</h3>
              <div class="space-y-3">
                <div class="lg:hidden">
                  <span class="text-sm text-slate-500">Current Role</span>
                  <p class="font-medium text-slate-800">{{ data.currentRole }}</p>
                </div>
                <div class="lg:hidden">
                  <span class="text-sm text-slate-500">Location</span>
                  <p class="font-medium text-slate-800">{{ data.location }}</p>
                </div>
                <div>
                  <span class="text-sm text-slate-500">Languages</span>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <span v-for="lang in data.languages" :key="lang"
                          class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {{ lang }}
                    </span>
                  </div>
                </div>
                <div>
                  <span class="text-sm text-slate-500">Availability</span>
                  <div class="flex items-center mt-1">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span class="text-sm text-slate-700">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-800 mb-12 text-center">Experience</h2>
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div class="space-y-8">
            <div v-for="(exp, index) in data.experience" :key="index"
                 class="relative flex items-start">
              <!-- Timeline dot -->
              <div class="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>

              <!-- Content -->
              <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'">
                <div class="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                  <div class="flex justify-between items-start mb-3">
                    <h3 class="font-semibold text-slate-800">{{ exp.position }}</h3>
                    <span class="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {{ exp.duration }}
                    </span>
                  </div>
                  <p class="text-blue-600 font-medium mb-2">{{ exp.company }}</p>
                  <p class="text-slate-600 text-sm mb-2">{{ exp.location }}</p>
                  <p class="text-slate-600 text-sm">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-800 mb-12 text-center">Technical Skills</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="category in data.skills" :key="category.name"
               class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
            <h3 class="font-semibold text-slate-800 mb-4 flex items-center">
              <span v-html="getSkillIcon(category.name)" class="mr-2 text-blue-600"></span>
              {{ category.name }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in category.items" :key="skill"
                    class="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications Section -->
    <section id="publications" class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-800 mb-12 text-center">Publications</h2>
        <div class="grid gap-6">
          <div v-for="(pub, index) in data.publications" :key="index"
               class="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="font-semibold text-slate-800 mb-2 leading-tight">{{ pub.title }}</h3>
                <p class="text-slate-600 mb-2">{{ pub.authors }}</p>
                <p class="text-blue-600 text-sm mb-2">{{ pub.journal }}</p>
                <p class="text-slate-500 text-sm">{{ pub.year }}</p>
              </div>
              <a v-if="pub.link" :href="pub.link" target="_blank"
                 class="ml-4 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                <span v-html="icons.external"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-800 mb-12 text-center">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in data.featuredProjects" :key="project.id"
               class="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span v-html="getProjectIcon(project.title)" class="text-white"></span>
              </div>
              <div class="ml-4">
                <h3 class="font-semibold text-slate-800">{{ project.title }}</h3>
                <p class="text-slate-500 text-sm">{{ project.duration }}</p>
              </div>
            </div>
            <p class="text-slate-600 text-sm mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-2 py-1 bg-white text-slate-600 rounded-full text-xs border border-slate-200">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-slate-800 mb-12 text-center">Education</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="edu in data.education" :key="edu.degree"
               class="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <h3 class="font-semibold text-slate-800 mb-2">{{ edu.degree }}</h3>
            <p class="text-blue-600 font-medium mb-2">{{ edu.institution }}</p>
            <p class="text-slate-500 text-sm">{{ edu.period }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
      <div class="max-w-6xl mx-auto text-center">
        <p>&copy; 2025 {{ data.name }}. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Using simple SVG icons instead of Heroicons to avoid import issues
const icons = {
  phone: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.3 11.079c-.673.371-.851 1.204-.418 1.946a8.958 8.958 0 006.095 6.095c.742.433 1.575.255 1.946-.418l1.692-3.924a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  email: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  code: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m-4 4l-4 4 4 4m4-8l4 4-4 4"/></svg>',
  cpu: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
  tool: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/></svg>',
  globe: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
  external: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
  beaker: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 004 21h16a8.014 8.014 0 00-.244-5.572zM12 9v-4"/></svg>',
  eye: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>',
  shield: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  user: '<svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'
}

// Helper functions for icons
const getSkillIcon = (skillName) => {
  const iconMap = {
    'Programming': icons.code,
    'AI/ML Tools': icons.cpu,
    'Hardware': icons.tool,
    'Platforms': icons.globe
  }
  return iconMap[skillName] || icons.code
}

const getProjectIcon = (projectTitle) => {
  if (projectTitle.includes('Signal Denoising')) return icons.beaker
  if (projectTitle.includes('Object Tracking')) return icons.eye
  if (projectTitle.includes('Security')) return icons.shield
  return icons.beaker
}
const data = {
  name: 'Alif Wicaksana Ramadhan',
  photo: '/images/profile.jpg', // Add your photo path here
  contact: {
    phone: '(+62) 813-6984-2186',
    email: 'alifwr98@gmail.com'
  },
  summary: 'Electronics Engineering graduate with expertise in Machine Learning, Computer Vision, and Robotics. Currently working as a Professor Assistant at University of Indonesia, focusing on advanced AI research and development.',
  currentRole: 'Professor Assistant',
  location: 'Jakarta, Indonesia',
  languages: ['Indonesian', 'English (IELTS 6.5)', 'Japanese (JLPT N3)'],

  experience: [
    {
      position: 'Professor Assistant',
      company: 'Intelligent Robot System Laboratory (IRoS) - University of Indonesia',
      location: 'Depok',
      duration: 'Feb 2024 - Present',
      description: 'Research and development in AI, robotics, and computer vision. Teaching assistance for robotics courses.'
    },
    {
      position: 'Software Developer',
      company: 'PT.Fiesto',
      location: 'Surabaya',
      duration: 'Aug 2023 - Jan 2024',
      description: 'Full-stack development and software engineering for various client projects.'
    },
    {
      position: 'Software Developer',
      company: 'PT.Santai Berkualitas Syberindo',
      location: 'Bandung (Remote)',
      duration: 'Sep 2022 - Mar 2023',
      description: 'Remote software development focusing on web applications and backend systems.'
    }
  ],

  skills: [
    {
      name: 'Programming',
      items: ['Python', 'JavaScript', 'C/C++', 'Rust']
    },
    {
      name: 'AI/ML Tools',
      items: ['PyTorch', 'TensorFlow', 'OpenCV', 'TinyML']
    },
    {
      name: 'Hardware',
      items: ['STM32', 'ESP32', 'Arduino', 'PCB Design']
    },
    {
      name: 'Platforms',
      items: ['Linux', 'ROS/ROS2', 'Docker', 'Git']
    }
  ],

  publications: [
    {
      title: 'Convolutional Autoencoder with Sequential and Channel Attention for Robust ECG Signal Denoising with Edge Device Implementation',
      authors: 'Alif Wicaksana Ramadhan, et al.',
      journal: 'IEEE Access, vol. 13, pp. 54407-54422',
      year: '2025',
      link: '#'
    },
    {
      title: 'Lidar-based Human Detection for a Mobile Robot in Social Environment using Deep Learning',
      authors: 'Alif Wicaksana Ramadhan, Bima Sena Bayu Dewantara, Setiawardhana',
      journal: 'International Electronics Symposium (2023)',
      year: '2023',
      link: '#'
    }
  ],

  featuredProjects: [
    {
      id: 1,
      title: 'Deep Learning Signal Denoising',
      description: 'Advanced ECG signal denoising using Transformer and CNN architectures for medical analysis.',
      duration: 'Sep 2024 - Dec 2024',
      technologies: ['PyTorch', 'Transformer', 'CNN', 'Medical AI']
    },
    {
      id: 2,
      title: 'Object Tracking with DeepSORT',
      description: 'Robust human tracking using RGB and infrared image fusion with Kalman filtering.',
      duration: 'Jul 2024 - Sep 2024',
      technologies: ['Computer Vision', 'DeepSORT', 'Kalman Filter', 'Image Fusion']
    },
    {
      id: 3,
      title: 'Biometric Security System',
      description: 'Web application with face recognition using Siamese networks and vector database.',
      duration: 'Apr 2024 - Jun 2024',
      technologies: ['Siamese Network', 'InceptionNet', 'QdrantDB', 'FastAPI']
    }
  ],

  education: [
    {
      degree: 'Master in Electrical Engineering',
      institution: 'Politeknik Elektronika Negeri Surabaya',
      period: '2021 - 2023'
    },
    {
      degree: 'Bachelor in Electronics Engineering',
      institution: 'Politeknik Elektronika Negeri Surabaya',
      period: '2016 - 2020'
    }
  ]
}

const navigation = [
  { id: 'hero', name: 'Home' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'publications', name: 'Publications' },
  { id: 'projects', name: 'Projects' },
  { id: 'education', name: 'Education' }
]
</script>

<style scoped>
.prose {
  @apply text-slate-600;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-400 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-500;
}
</style>
```

## Content Structure (content/resume.md)
```markdown
---
name: "Alif Wicaksana Ramadhan"
contact:
phone: "(+62) 813-6984-2186"
email: "alifwr98@gmail.com"
currentRole: "Professor Assistant"
location: "Jakarta, Indonesia"
summary: "Electronics Engineering graduate with expertise in Machine Learning, Computer Vision, and Robotics. Currently working as a Professor Assistant at University of Indonesia, focusing on advanced AI research and development."
languages:
- "Indonesian"
- "English (IELTS 6.5)"
- "Japanese (JLPT N3)"
---

# Resume Content

This file contains the structured data for the resume website.
```

## Key Features

1. **Modern Design**: Gradient backgrounds, glassmorphism effects, and smooth animations
2. **Responsive Layout**: Mobile-first design that works on all devices
3. **Dynamic Content**: Uses Nuxt Content module for easy content management
4. **Interactive Elements**: Hover effects, smooth scrolling, and animated transitions
5. **Professional Typography**: Clean, readable fonts with proper hierarchy
6. **Color Scheme**: Professional blue/slate palette with accent colors
7. **Timeline Layout**: Visual timeline for experience section
8. **Card-based Design**: Modern card layouts for different content sections
9. **Icon Integration**: Heroicons for visual elements
10. **SEO Friendly**: Proper semantic HTML structure

## Setup Instructions

1. Install dependencies:
```bash
npm install @nuxt/content @headlessui/vue @heroicons/vue
```

2. Add to nuxt.config.ts:
```javascript
export default defineNuxtConfig({
modules: ['@nuxt/content'],
css: ['~/assets/css/main.css']
})
```

3. Create the content structure as shown above
4. Add Tailwind CSS configuration for custom colors and animations

This design is modern, clean, and professional while being visually engaging and easy to navigate.