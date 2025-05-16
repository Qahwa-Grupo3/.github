<template>
  <section class="progress-tracker">
    <h2>Coffee Plantation Progress Tracker</h2>
    <p>Monitor the development progress of our coffee plantations.</p>
    <div class="status-info">
      <p><strong>Planted Area:</strong> {{ progress.plantedArea }} hectares</p>
      <p><strong>Harvest Yield:</strong> {{ progress.harvestYield }} kg</p>
      <p><strong>Fertilizer Used:</strong> {{ progress.fertilizerUsed }} kg</p>
    </div>
    <div class="progress-bar-wrapper">
      <label for="growthProgress">Growth Progress:</label>
      <div class="progress-bar" role="progressbar" :aria-valuenow="progress.growthPercent" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-fill" :style="{ width: progress.growthPercent + '%' }"></div>
      </div>
      <p>{{ progress.growthPercent }}%</p>
    </div>
    <button @click="fetchProgress" :disabled="loading">
      {{ loading ? 'Updating...' : 'Refresh Progress' }}
    </button>
    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>

<script>
import { fetchPlantationProgress } from '../api';

export default {
  name: 'ProgressTracker',
  data() {
    return {
      progress: {
        plantedArea: 0,
        harvestYield: 0,
        fertilizerUsed: 0,
        growthPercent: 0,
      },
      loading: false,
      error: '',
    };
  },
  methods: {
    async fetchProgress() {
      this.loading = true;
      this.error = '';
      try {
        const data = await fetchPlantationProgress();
        this.progress = data;
      } catch (err) {
        this.error = 'Failed to load progress data. Please try again.';
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchProgress();
  },
};
</script>

<style scoped>
.progress-tracker {
  background: #f9f6f1;
  padding: 1.6rem 2rem;
  border-radius: 14px;
  max-width: 550px;
  margin: 1.5rem auto;
  box-shadow: 0 3px 10px rgba(111,78,55,0.15);
  text-align: center;
}

h2 {
  color: #6f4e37;
  margin-bottom: 1rem;
}

.status-info p {
  font-size: 1.1rem;
  margin: 0.4rem 0;
  color: #4a4033;
}

.progress-bar-wrapper {
  margin: 1rem 0;
  text-align: center;
}

label {
  display: block;
  font-weight: 600;
  color: #5a3e26;
  margin-bottom: 0.4rem;
}

.progress-bar {
  background-color: #d9c8b4;
  border-radius: 20px;
  height: 25px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 0.5rem;
  overflow: hidden;
}

.progress-fill {
  background-color: #6f4e37;
  height: 100%;
  width: 0%;
  transition: width 0.6s ease;
}

button {
  background-color: #6f4e37;
  color: white;
  font-weight: 600;
  padding: 0.6rem 1.3rem;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
}

button:disabled {
  cursor: wait;
  background-color: #a1856a;
}

button:hover:not(:disabled) {
  background-color: #503726;
}

.error {
  margin-top: 1rem;
  font-weight: 700;
  color: #c62828;
}
</style>
