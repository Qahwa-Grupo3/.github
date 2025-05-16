<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="logo">Coffee Worker Dev</h1>
      <ul class="nav-links">
        <li><router-link to="/" exact-active-class="active-link">Home</router-link></li>
        <li><router-link to="/information" exact-active-class="active-link">Information</router-link></li>
        <li><router-link to="/quiz" exact-active-class="active-link">Quiz</router-link></li>
        <li><router-link to="/progress" exact-active-class="active-link">Progress Tracker</router-link></li>
        <li><router-link to="/donation" exact-active-class="active-link">Donation</router-link></li>
        <li><router-link to="/login" exact-active-class="active-link">Login</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #6f4e37, #d7b38c);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #4a2c20;
  box-shadow: 0 4px 15px rgba(0,0,0,0.7);
}

.logo {
  color: #fbd38d;
  font-weight: 900;
  font-size: 1.8rem;
  letter-spacing: 2px;
  user-select: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links li {
  user-select: none;
}

.nav-links a {
  color: #eed6c4;
  text-decoration: none;
  font-weight: 700;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.active-link,
.nav-links a:hover {
  background-color: #fbd38d;
  color: #4a2c20;
}

main {
  flex-grow: 1;
  padding: 2rem;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
}
</style>