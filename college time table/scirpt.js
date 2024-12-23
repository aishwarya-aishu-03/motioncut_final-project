function switchRole(role) {
    const content = document.getElementById("content");

    switch (role) {
        case "admin":
            content.innerHTML = `
                <h2>Admin Dashboard</h2>
                <button onclick="createSchedule()">Create Schedule</button>
                <button onclick="makeAnnouncement()">Make Announcement</button>
                <div id="admin-actions"></div>
            `;
            break;

        case "faculty":
            content.innerHTML = `
                <h2>Faculty Dashboard</h2>
                <button onclick="viewSchedule()">View Schedule</button>
                <button onclick="trackAttendance()">Track Attendance</button>
                <div id="faculty-actions"></div>
            `;
            break;

        case "student":
            content.innerHTML = `
                <h2>Student Dashboard</h2>
                <button onclick="viewSchedule()">View Schedule</button>
                <button onclick="syncCalendar()">Sync to Calendar</button>
                <div id="student-actions"></div>
            `;
            break;

        default:
            content.innerHTML = "<h2>Welcome! Please select a role to get started.</h2>";
    }
}

function createSchedule() {
    const adminActions = document.getElementById("admin-actions");
    adminActions.innerHTML = `
        <form>
            <label for="class">Class Name:</label>
            <input type="text" id="class" required>
            <label for="time">Time:</label>
            <input type="time" id="time" required>
            <label for="faculty">Faculty:</label>
            <input type="text" id="faculty" required>
            <button type="submit">Save Schedule</button>
        </form>
    `;
}

function makeAnnouncement() {
    const adminActions = document.getElementById("admin-actions");
    adminActions.innerHTML = `
        <form>
            <label for="announcement">Announcement:</label>
            <textarea id="announcement" rows="4" required></textarea>
            <button type="submit">Post Announcement</button>
        </form>
    `;
}

function viewSchedule() {
    const actions = document.getElementById("content");
    actions.innerHTML += `
        <div>
            <h3>Class Schedule:</h3>
            <ul>
                <li>Class: Math 101, Time: 9:00 AM, Faculty: Prof. Smith</li>
                <li>Class: Physics 201, Time: 11:00 AM, Faculty: Dr. Johnson</li>
            </ul>
        </div>
    `;
}

function trackAttendance() {
    const facultyActions = document.getElementById("faculty-actions");
    facultyActions.innerHTML = `
        <form>
            <label for="student-name">Student Name:</label>
            <input type="text" id="student-name" required>
            <label for="attendance-status">Status:</label>
            <select id="attendance-status">
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
            </select>
            <button type="submit">Mark Attendance</button>
        </form>
    `;
}

function syncCalendar() {
    alert("Your schedule has been synced to your calendar!");
}
function exportScheduleToCSV() {
    const schedule = [
        ["Class", "Time", "Faculty"],
        ["Math 101", "9:00 AM", "Prof. Smith"],
        ["Physics 201", "11:00 AM", "Dr. Johnson"],
        ["Chemistry 301", "1:00 PM", "Prof. Adams"],
    ];

    let csvContent = "data:text/csv;charset=utf-8,";
    schedule.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "class_schedule.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const mode = body.classList.contains("dark-mode") ? "Dark" : "Light";
    alert(`${mode} mode enabled!`);
}
// Navigation function
function navigateTo(role) {
    alert(`Navigating to the ${role} section!`);
    // Here, you can redirect to a specific page, e.g., `admin.html`, `faculty.html`, etc.
    // window.location.href = `${role}.html`;
}
// Navigation function
function navigateTo(role) {
    alert(`Navigating to the ${role} section!`);
    // Replace with navigation logic, e.g., window.location.href = `${role}.html`;
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Dynamic Greeting
function setGreeting() {
    const hours = new Date().getHours();
    const greetingElement = document.querySelector('h2');
    if (hours < 12) {
        greetingElement.textContent = "Good Morning! Please select a role to get started.";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon! Please select a role to get started.";
    } else {
        greetingElement.textContent = "Good Evening! Please select a role to get started.";
    }
}

// Set dynamic greeting on page load
window.onload = setGreeting;
