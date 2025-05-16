<template>
  <section class="information">
    <h2>About PaginaQahwa</h2>
    <p>
      PaginaQahwa is dedicated to the development and empowerment of coffee workers through interactive educational modules, training programs, and community support. We believe that enhancing the knowledge and skills of coffee workers leads to better coffee quality, improved livelihoods, and sustainable plantations.
    </p>
    <h3>Our Mission</h3>
    <p>
      To provide accessible and engaging resources that help coffee workers grow professionally and personally, while promoting sustainable practices in coffee production.
    </p>
    <h3>Our Programs</h3>
    <ul>
      <li><strong>Skill Development:</strong> Interactive modules covering coffee cultivation, processing, and brewing techniques.</li>
      <li><strong>Progress Tracking:</strong> Tools for monitoring plantation growth and worker achievements.</li>
      <li><strong>Community Support:</strong> Platforms for sharing knowledge, experiences, and resources among coffee workers.</li>
      <li><strong>Donation Drives:</strong> Initiatives to support coffee workers and improve their working conditions.</li>
    </ul>
    <h3>Contact Us</h3>
    <p>
      For more information, collaboration inquiries, or support, please reach out to us at <a href="mailto:contact@paginaqahwa.com">contact@paginaqahwa.com</a>.
    </p>
  </section>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style scoped>
.information {
  max-width: 720px;
  margin: 2rem auto;
  background-color: #fff8f0;
  padding: 2rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(111, 78, 55, 0.25);
  color: #4a4033;
}

h2 {
  color: #6f4e37;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

h3 {
  color: #5a3e26;
  margin-top: 1.6rem;
  margin-bottom: 0.6rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  margin-left: 1.6rem;
  list-style-type: disc;
  font-size: 1.05rem;
  line-height: 1.5;
}

ul li {
  margin-bottom: 0.6rem;
}

a {
  color: #6f4e37;
  text-decoration: none;
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}
</style>
