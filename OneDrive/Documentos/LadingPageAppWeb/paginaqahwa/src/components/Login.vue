<template>
  <section class="login">
    <h2>Login to PaginaQahwa</h2>
    <form @submit.prevent="handleLogin">
      <label for="username">Username:</label>
      <input
        id="username"
        v-model="username"
        type="text"
        placeholder="Enter your username"
        required
        autocomplete="username"
      />

      <label for="password">Password:</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Enter your password"
        required
        autocomplete="current-password"
      />

      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </section>
</template>

<script>
import { loginUser } from '../api';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = '';
      if (!this.username || !this.password) {
        this.errorMessage = 'Please fill out all fields.';
        return;
      }
      this.loading = true;
      try {
        const success = await loginUser(this.username, this.password);
        if (success) {
          this.errorMessage = '';
          alert('Login successful!');
          this.$router.push({ name: 'Home' });
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      } catch (error) {
        this.errorMessage = 'Login failed. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login {
  background: #fffaf3;
  max-width: 360px;
  margin: 2rem auto;
  padding: 2rem 2.2rem;
  border-radius: 14px;
  box-shadow: 0 3px 10px rgba(111, 78, 55, 0.2);
  text-align: center;
}

h2 {
  color: #6f4e37;
  margin-bottom: 1.3rem;
}

form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  margin: 0.6rem 0 0.25rem;
  font-weight: 600;
  color: #5a3e26;
}

input {
  padding: 0.5rem 0.6rem;
  font-size: 1rem;
  border: 1px solid #d2b48c;
  border-radius: 8px;
  outline-offset: 1px;
}

button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.2rem;
  background-color: #6f4e37;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #a1856a;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #503726;
}

.error {
  margin-top: 1rem;
  font-weight: 700;
  color: #c62828;
  text-align: center;
}
</style>
