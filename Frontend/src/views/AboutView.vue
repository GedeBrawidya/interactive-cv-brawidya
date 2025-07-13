<template>
  <div>
    <h1>Portfolio Data</h1>
    
    <section v-if="education.data">
      <h2>Education</h2>
      <div v-for="edu in education.data" :key="edu.id">
        <h3>{{ edu.institution }}</h3>
        <p>{{ edu.major }}</p>
      </div>
    </section>

    <!-- Tambahkan section lain untuk achievements, experiences, dll -->
  </div>
</template>

<script>
import { 
  fetchEducation, 
  fetchAchievements,
  fetchExperiences,
  fetchSkills,
  fetchProjects
} from '../api/api';

export default {
  data() {
    return {
      education: [],
      achievements: [],
      experiences: [],
      skills: [],
      projects: []
    };
  },
  async created() {
    this.education = await fetchEducation();
    this.achievements = await fetchAchievements();
    this.experiences = await fetchExperiences();
    this.skills = await fetchSkills();
    this.projects = await fetchProjects();
  }
};
</script>