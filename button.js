function load() {
  const button = document.querySelector(".btn");
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("darkmode", state);
  }

  toggleDarkMode(useDark.matches);
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkmode");
  });
}

window.addEventListener("DOMContentLoaded", load);
