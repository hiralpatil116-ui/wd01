document.querySelectorAll(".enroll-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const loggedIn = localStorage.getItem("loggedIn");
    const courseName = btn.dataset.course;

    if (!loggedIn) {
      window.location.href = "login.html";
      return;
    }

    let courses = JSON.parse(localStorage.getItem("myCourses")) || [];

    if (!courses.includes(courseName)) {
      courses.push(courseName);
      localStorage.setItem("myCourses", JSON.stringify(courses));

      btn.innerText = "Enrolled";
      btn.style.background = "green";
      btn.disabled = true;
    }
  });
});
