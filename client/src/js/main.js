export function generateMainContent() {
  return `
  <div id="navbar-spacer"></div>
  <main>
    <section id="home">
      <h1>Welcome to the Dynamic Web App</h1>
      <p>This is the homepage with a brief introduction.</p>
    </section>

    <section id="profile" style="display:none;">
      <h2>Your Profile</h2>
      <p>Profile information will be displayed here once logged in.</p>
    </section>

    <section id="about" style="display:none;">
      <h2>About This Website</h2>
      <p>This website demonstrates how to dynamically generate and switch between pages.</p>
      <h3>Our Mission</h3>
      <p>We aim to provide a seamless user experience through interactive navigation and intuitive design.</p>
      <h3>Our Team</h3>
      <p>Meet our highly skilled and dedicated team that strives to deliver the best services and support.</p>
      <p>Our specialists are ready to assist you in all aspects of your journey.</p>
      <h3>Contact Information</h3>
      <p>You can reach us via email or through our contact form.</p>
      <h3>Scroll for More</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat sapien non nisi pharetra,
        id venenatis orci auctor. In hac habitasse platea dictumst. Integer nec consequat arcu, nec gravida ligula.
        Suspendisse potenti. Integer tempus, mauris sit amet feugiat interdum, nulla felis auctor libero, nec tempor
        lacus odio a risus. Suspendisse quis nulla sed lacus vehicula pharetra eget nec nulla.
      </p>
      <!-- Add more text to enable scrolling -->
      <p>Further scrolling content...</p>
      <p>Even more scrolling content...</p>
    </section>
  </main>
  `;
}


export function initializeNavigation() {
  function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });
  }

  document.querySelector('a[href="#home"]').addEventListener("click", (e) => {
    e.preventDefault();
    showSection("home");
  });
  document.querySelector('a[href="#profile"]').addEventListener("click", (e) => {
    e.preventDefault();
    showSection("profile");
  });
  document.querySelector('a[href="#about"]').addEventListener("click", (e) => {
    e.preventDefault();
    showSection("about");
  });

  showSection("home");
}
