document.addEventListener("DOMContentLoaded", () => {

  const user = JSON.parse(localStorage.getItem("coursehubUser"));
  const courses = JSON.parse(localStorage.getItem("myCourses")) || [];

  if (user) {
    const dashboard = document.getElementById("dashboard");
    if (dashboard) dashboard.style.display = "block";

    document.getElementById("enrolledCount").innerText = courses.length;

    let progress = courses.length * 25;
    if (progress > 100) progress = 100;

    document.getElementById("progressText").innerText = progress + "%";
  }

});

