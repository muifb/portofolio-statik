import "./bootstrap";
import "../css/app.css";

// 🌙 Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const toggleBtn = document.getElementById("themeToggle");

    // Load theme dari localStorage
    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
    }

    toggleBtn.addEventListener("click", () => {
        html.classList.toggle("dark");
        const theme = html.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
});
