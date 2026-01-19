// ========== SIGNUP ==========
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { name, email, password };
    localStorage.setItem("coursehubUser", JSON.stringify(user));

    alert("Signup successful, please login");
    window.location.href = "login.html";
  });
}

// ========== LOGIN ==========
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("coursehubUser"));

    if (!user) {
      alert("Please sign up first");
      return;
    }

    if (email === user.email && password === user.password) {
      alert("Login successful");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  });
}

// ========== LOGOUT ==========
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
