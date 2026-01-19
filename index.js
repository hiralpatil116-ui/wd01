document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("coursehubUser"));
  const loggedIn = localStorage.getItem("loggedIn");

  const nav = document.getElementById("navLinks");
  const dashboard = document.getElementById("dashboard");
  const enrolledCount = document.getElementById("enrolledCount");
  const progressText = document.getElementById("progressText");
  const authSection = document.getElementById("authSection");

  if (loggedIn && user) {
    /* ===== HEADER ===== */
    nav.innerHTML = `
      <span style="color:white;margin-right:15px;">
        Welcome, ${user.name}
      </span>
      <a href="contact_us.html">Contact</a>
      <a href="#" onclick="logout()">Logout</a>
    `;

    /* ===== DASHBOARD SHOW ===== */
    dashboard.style.display = "block";
    authSection.style.display = "none";

    const courses = JSON.parse(localStorage.getItem("myCourses")) || [];

    enrolledCount.textContent = courses.length;

    // simple progress logic
    let progress = courses.length === 0 ? 0 : courses.length * 20;
    if (progress > 100) progress = 100;

    progressText.textContent = progress + "%";

  } else {
    /* ===== NOT LOGGED IN ===== */
    dashboard.style.display = "none";
    authSection.style.display = "block";
  }
});

/* ===== LOGOUT ===== */
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("coursehubUser");
  location.reload();
}
