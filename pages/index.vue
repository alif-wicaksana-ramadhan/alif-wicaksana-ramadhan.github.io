<template>
  <div class="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
    <nav class="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div class="text-3xl font-bold">Alif Wicaksana Ramadhan</div>
      <div>
        <ul class="flex space-x-6">
          <li><a href="#about" class="hover:text-blue-200 transition-colors">About</a></li>
          <li><a href="#education" class="hover:text-blue-200 transition-colors">Education</a></li>
          <li><a href="#experience" class="hover:text-blue-200 transition-colors">Experience</a></li>
          <li><a href="#skills" class="hover:text-blue-200 transition-colors">Skills</a></li>
          <li><a href="#projects" class="hover:text-blue-200 transition-colors">Projects</a></li>
        </ul>
      </div>
    </nav>

    <header class="text-center mt-20 mb-10">
      <h1 class="text-5xl font-extrabold">Alif Wicaksana Ramadhan</h1>
      <p class="mt-4 text-lg">(+62) 813-6984-2186 | <a href="mailto:alifwr98@gmail.com" class="text-blue-200 hover:underline">alifwr98@gmail.com</a></p>
      <p class="text-lg">Software Developer & Machine Learning Enthusiast</p>
    </header>

    <section id="about" class="text-center mb-16 max-w-4xl mx-auto">
      <p class="text-xl">Welcome to my personal page. I am passionate about technology, robotics, and creating solutions that improve lives. With experience in software development, machine learning, and robotics, I bring dedication, skill, and enthusiasm to every project I undertake.</p>
    </section>

    <section id="education" class="bg-white text-gray-900 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-3xl font-bold border-b-4 border-blue-500 pb-2 mb-6 text-center">Education</h2>
      <ul class="space-y-4">
        <li>
          <strong class="text-blue-700">Politeknik Elektronika Negeri Surabaya</strong> - Bachelor in Electronics Engineering (2016 - 2020)
        </li>
        <li>
          <strong class="text-blue-700">Politeknik Elektronika Negeri Surabaya</strong> - Master in Electrical Engineering (2021 - 2023)
        </li>
      </ul>
    </section>

    <section id="experience" class="bg-white text-gray-900 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-3xl font-bold border-b-4 border-blue-500 pb-2 mb-6 text-center">Experiences</h2>
      <ul class="space-y-6">
        <li>
          <strong class="text-blue-700">Professor Assistant</strong> - Intelligent Robot System Laboratory (IRoS), University of Indonesia (Feb 2024 - Now)
        </li>
        <li>
          <strong class="text-blue-700">Software Developer</strong> - PT.Fiesto Surabaya (Aug 2023 - Jan 2024)
        </li>
        <li>
          <strong class="text-blue-700">Software Developer (Remote)</strong> - PT.Santai Berkualitas Syberindo (Sep 2022 - Mar 2023)
        </li>
        <li>
          <strong class="text-blue-700">Machine Learning Developer (Freelance)</strong> - Self Freelance (Nov 2020 - Jan 2022)
        </li>
      </ul>
    </section>

    <section id="skills" class="bg-white text-gray-900 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-3xl font-bold border-b-4 border-blue-500 pb-2 mb-6 text-center">Technical Skills</h2>
      <ul class="grid grid-cols-2 gap-6">
        <li class="bg-blue-100 p-4 rounded-lg shadow-md">Programming: C, C++, Python, Javascript</li>
        <li class="bg-blue-100 p-4 rounded-lg shadow-md">Professional Software: Linux, ROS, PyTorch, Tensorflow, OpenCV, Flask, FastAPI, Git, Docker, CI/CD</li>
        <li class="bg-blue-100 p-4 rounded-lg shadow-md">Hardware: STM32, ESP32, AVR, Arduino, PCB Design (Eagle)</li>
        <li class="bg-blue-100 p-4 rounded-lg shadow-md">Languages: Indonesian, English (IELTS 6.5), Japanese (N4 simulation)</li>
      </ul>
    </section>

    <section id="projects" class="bg-white text-gray-900 rounded-lg shadow-xl p-8 max-w-5xl mx-auto mb-16">
      <h2 class="text-3xl font-bold border-b-4 border-blue-500 pb-2 mb-6 text-center">Projects</h2>
      <ul class="space-y-6">
        <li>
          <strong class="text-blue-700">Deep Learning Based Signal Denoising</strong> - Research Assistant (Sep 2024 - Now)
          <p class="text-sm text-gray-600">Developed a deep learning model combining Transformer and CNN architectures to denoise ECG signals for improved clarity and accuracy in medical analysis.</p>
        </li>
        <li>
          <strong class="text-blue-700">Object Tracking using DeepSORT with Infrared Image Fusion</strong> - Research Assistant (Jul 2024 - Sep 2024)
          <p class="text-sm text-gray-600">Fused RGB and infrared image data for robust human tracking in varied lighting conditions, employing a Kalman filter and deep learning model for feature extraction.</p>
        </li>
        <li>
          <strong class="text-blue-700">Biometric Security System using Deep Learning</strong> - Research Assistant (Apr 2024 - Jun 2024)
          <p class="text-sm text-gray-600">Built a biometric security web application using Siamese network for facial verification, integrated with QdrantDB for storing user embeddings.</p>
        </li>
        <li>
          <strong class="text-blue-700">Omni-wheel Mobile Robot Localization and Mapping using Ultra Wide-Band (UWB)</strong> - Freelance Project (Mar 2024 - May 2024)
          <p class="text-sm text-gray-600">Created a map of gas leakage intensities using a mobile robot, utilizing neural networks for gas classification and trilateration-based UWB localization.</p>
        </li>
        <li>
          <strong class="text-blue-700">Human Following Robot using Optimized Adaptive Social Force Model</strong> - Master Student (Jan 2021 - Jul 2023)
          <p class="text-sm text-gray-600">Developed a differential drive mobile robot capable of following a person by detecting and tracking human leg positions using deep learning and Kalman filter. Optimized navigation using Adaptive Social Force Model.</p>
        </li>
        <li>
          <strong class="text-blue-700">Leg Detection using Lidar 2D</strong> - Student Exchange at TUT (Oct 2022 - Nov 2022)
          <p class="text-sm text-gray-600">Developed a tool to detect, track, and associate persons around a robot using 2D Lidar data and SSD MobilenetV3 to help navigation processes.</p>
        </li>
        <li>
          <strong class="text-blue-700">Distributed Image Stitching using MPI</strong> - Master Student (Aug 2022 - Dec 2022)
          <p class="text-sm text-gray-600">Improved image stitching time by distributing workloads across several nodes using MPI as part of a High-Performance Computing course.</p>
        </li>
        <li>
          <strong class="text-blue-700">Cheating Detection System</strong> - Self Freelance (Jan 2022 - Mar 2022)
          <p class="text-sm text-gray-600">Developed an application for cheating detection in test monitoring using Yolov3 for hand detection and MTCNN for gaze detection to determine cheating behavior.</p>
        </li>
        <li>
          <strong class="text-blue-700">Mask Detection on Attendance System</strong> - Self Freelance (Aug 2021 - Oct 2021)
          <p class="text-sm text-gray-600">Created an attendance system with mask detection capability during the COVID-19 pandemic, utilizing LBPH for face detection, VGGNet16 for identity recognition, and Yolov5 for mask detection on Raspberry Pi 4.</p>
        </li>
        <li>
          <strong class="text-blue-700">Event Detection using Acoustic Sensor</strong> - Self Freelance (Aug 2020 - Oct 2020)
          <p class="text-sm text-gray-600">Developed a monitoring device using microphones to detect events based on acoustic signals and CNN for feature extraction, implemented on MySQL and Laravel with an Android user interface.</p>
        </li>
      </ul>
    </section>

    <footer class="text-center py-10">
      <p class="text-lg">Connect with me on <a href="#" class="text-blue-200 hover:underline">LinkedIn</a> | © 2024 Alif Wicaksana Ramadhan</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CvLandingPage'
}
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
a:hover {
  color: #1d4ed8;
}

.bg-blue-100 {
  background-color: #ebf8ff;
}
</style>
