
export function generateLoginForm() {
  return `
    <div id="login-page">
      <h2>Login</h2>
      <form id="login-form" autocomplete="on">
        <div class="form-group">
          <label for="login-username">Username:</label>
          <input type="text" id="login-username" name="username" autocomplete="username" placeholder="Username" required>
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input type="password" id="login-password" name="password" autocomplete="current-password" placeholder="Password" required>
        </div>
        <button type="submit" class="modal-button">Login</button>
      </form>
      <p>Don't have an account? <a href="#" id="switch-to-signup">Sign up</a></p>
    </div>
  `;
}

export function generateSignupForm() {
  return `
    <div id="signup-page" style="display:none;">
      <h2>Sign Up</h2>
      <form id="signup-form" autocomplete="on">
        <div class="form-group">
          <label for="signup-username">Username:</label>
          <input type="text" id="signup-username" name="username" autocomplete="username" placeholder="Username" required>
        </div>
        <div class="form-group">
          <label for="signup-password">Password:</label>
          <input type="password" id="signup-password" name="password" autocomplete="new-password" placeholder="Password" required>
        </div>
        <div class="form-group">
          <input type="password" id="signup-confirm-password" name="confirm-password" autocomplete="new-password" placeholder="Confirm Password" required>
        </div>
        <button type="submit" class="modal-button">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#" id="switch-to-login">Login</a></p>
    </div>
  `;
}

export function generateLoginModal() {
  return `
    <div id="login-modal" class="modal">
      <div class="modal-content">
        <span id="close-modal" class="close">&times;</span>
        ${generateLoginForm()}
        ${generateSignupForm()}
      </div>
    </div>
  `;
}

export function initializeLoginModal() {
  const loginModal = document.getElementById("login-modal");
  const closeModal = document.getElementById("close-modal");

  document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });

  initializeLoginSwitch();
}

export function initializeLoginSwitch() {
  document.getElementById("switch-to-signup").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
  });

  document.getElementById("switch-to-login").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("login-page").style.display = "block";
  });
}