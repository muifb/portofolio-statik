document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const themeToggle = document.querySelector("#themeToggle");
  const html = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark" || (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    html.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
  themeToggle.addEventListener("click", function () {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  // Navbar Fixed on Scroll
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.add("hidden");
      toTop.classList.remove("flex");
    }
  };

  // Hamburger Menu Toggle
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  // Klik di luar hamburger untuk menutup menu
  // window.addEventListener("click", function (e) {
  //   if (e.target != hamburger && e.target != navMenu) {
  //     hamburger.classList.remove("hamburger-active");
  //     navMenu.classList.add("hidden");
  //   }
  // });
});
