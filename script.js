const courseList = document.getElementById("course-list");
const courseDetail = document.getElementById("course-detail");
const courseTitle = document.getElementById("course-title");
const sessionList = document.getElementById("session-list");

function loadCourses() {
  courseList.innerHTML = "";
  courses.forEach((course, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => showCourse(index);
    card.innerHTML = `
      <div class="title">${course.title}</div>
      <div class="meta">📄 ${course.code}</div>
      <div class="meta">👥 ${course.classCode}</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${course.progress}%"></div>
      </div>
      <div style="margin-top: 5px;">Class progress: <b>${course.progress}%</b></div>
    `;
    courseList.appendChild(card);
  });
}

function showCourse(index) {
  const course = courses[index];
  courseTitle.textContent = course.title;
  sessionList.innerHTML = "";

  course.sessions.forEach(session => {
    const sessionDiv = document.createElement("div");
    sessionDiv.className = "session";
    sessionDiv.innerHTML = `
      <div class="session-header">
        <div>${session.date} — ${session.room}</div>
        <div>${session.start} - ${session.end}</div>
      </div>
      <div class="session-details">${session.outline}</div>
    `;
    sessionDiv.querySelector(".session-header").onclick = () => {
      const details = sessionDiv.querySelector(".session-details");
      details.style.display = details.style.display === "block" ? "none" : "block";
    };
    sessionList.appendChild(sessionDiv);
  });

  document.querySelector(".container").style.display = "none";
  courseDetail.classList.remove("hidden");
}

function goBack() {
  document.querySelector(".container").style.display = "block";
  courseDetail.classList.add("hidden");
}

loadCourses();
