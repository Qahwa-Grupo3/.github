<template>
  <section class="donation">
    <h2>Support Coffee Workers</h2>
    <p>Your donation helps improve the lives and skills of coffee workers.</p>
    <form @submit.prevent="submitDonation">
      <label for="donorName">Name:</label>
      <input id="donorName" v-model="name" type="text" placeholder="Your name" required />

      <label for="donationAmount">Donation Amount ($):</label>
      <input id="donationAmount" v-model.number="amount" type="number" min="1" required />

      <button type="submit" :disabled="loading">Donate</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </section>
</template>

<script>
import { submitDonation } from '../api';

export default {
  name: 'Donation',
  data() {
    return {
      name: '',
      amount: null,
      loading: false,
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    async submitDonation() {
      this.successMessage = '';
      this.errorMessage = '';
      if (!this.name || !this.amount || this.amount <= 0) {
        this.errorMessage = 'Please fill out the form properly.';
        return;
      }
      this.loading = true;
      try {
        await submitDonation({ name: this.name, amount: this.amount });
        this.successMessage = 'Thank you for your donation!';
        this.name = '';
        this.amount = null;
      } catch (error) {
        this.errorMessage = 'Failed to submit donation. Please try again.';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.donation {
  background: #fff8f0;
  padding: 1.5rem 1.8rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 1rem auto;
  box-shadow: 0 3px 8px rgba(111,78,55,0.2);
}

h2 {
  color: #6f4e37;
  margin-bottom: 1rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 0.5rem 0 0.2rem;
  font-weight: 600;
  color: #5a3e26;
}

input {
  padding: 0.5rem;
  border: 1px solid #d2b48c;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  margin-top: 1rem;
  background-color: #6f4e37;
  color: white;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:disabled {
  background-color: #b7956a;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #503726;
}

.success {
  margin-top: 1rem;
  color: #2e7d32;
  font-weight: 700;
  text-align: center;
}

.error {
  margin-top: 1rem;
  color: #c62828;
  font-weight: 700;
  text-align: center;
}
</style>
