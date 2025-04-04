const themeToggle = document.getElementById("themeToggle");
const body = document.querySelector("body");
let userPreference;
let savedPreference;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  saveTheme();
});

function saveTheme() {
  if (body.classList.contains("dark")) {
    userPreference = { theme: "dark" };
    localStorage.setItem("userPreference", JSON.stringify(userPreference));
  } else if (!body.classList.contains("dark")) {
    userPreference = { theme: "light" };
    localStorage.setItem("userPreference", JSON.stringify(userPreference));
  }
}
addEventListener("DOMContentLoaded", () => {
  if (savedPreference.theme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
    return;
  } else if (savedPreference.theme === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
    return;
  }
});
savedPreference = JSON.parse(localStorage.getItem("userPreference"));
