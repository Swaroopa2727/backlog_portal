document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const toggle = document.getElementById("togglePassword");
  const alertBox = document.getElementById("loginAlert");
  const alertText = document.getElementById("loginAlertText");
  const btn = document.getElementById("signinBtn");

  function showError(msg) {
    alertText.textContent = msg;
    alertBox.classList.remove("d-none");
  }

  function hideError() {
    alertBox.classList.add("d-none");
  }

  // ---- Show / hide password ----
  toggle.addEventListener("click", function () {
    const show = password.type === "password";
    password.type = show ? "text" : "password";
    toggle.setAttribute("aria-pressed", show ? "true" : "false");
    toggle.setAttribute("aria-label", show ? "Hide password" : "Show password");
    toggle.firstElementChild.className = show ? "bi bi-eye-slash" : "bi bi-eye";
    password.focus();
  });

  // ---- Clear error as the user edits ----
  [email, password].forEach(function (el) {
    el.addEventListener("input", hideError);
  });

  // ---- Submit (demo only: replace with your real auth call) ----
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      showError("Please check your email and password and try again.");
      (email.checkValidity() ? password : email).focus();
      return;
    }

    hideError();
    btn.disabled = true;
    btn.querySelector(".btn-label").textContent = "Signing in…";
    btn.querySelector(".spinner-border").classList.remove("d-none");

    // Demo: simulate a request, then go to the dashboard
    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 700);
  });
});
