<template>
  <section class="home">
    <h1>Welcome to PaginaQahwa</h1>
    <p>
      We are dedicated to empowering coffee workers through skill development,
      training, and interactive learning modules. Join us as we improve the
      livelihoods of coffee workers across regions.
    </p>
    <div class="features">
      <article>
        <h2>Interactive Quizzes</h2>
        <p>Test and improve your coffee knowledge with our engaging quizzes.</p>
      </article>
      <article>
        <h2>Progress Tracking</h2>
        <p>Monitor your development progress in coffee plantations and skills.</p>
      </article>
      <article>
        <h2>Support & Donations</h2>
        <p>
          Contribute to the wellbeing and growth of coffee-worker communities
          through donations.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  max-width: 700px;
  margin: 2rem auto;
  background-color: #fff8f0;
  padding: 2rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(111, 78, 55, 0.25);
  text-align: center;
  color: #4a4033;
}

h1 {
  color: #6f4e37;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  justify-content: center;
}

.features article {
  background-color: #dcd2c0;
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  flex: 1 1 250px;
  box-shadow: 0 2px 8px rgba(111, 78, 55, 0.15);
  transition: transform 0.3s ease;
}

.features article:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 15px rgba(111, 78, 55, 0.3);
}

h2 {
  color: #5a3e26;
  margin-bottom: 0.6rem;
}

@media (max-width: 600px) {
  .features {
    flex-direction: column;
  }
}
</style>
