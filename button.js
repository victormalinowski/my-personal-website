function load() {
  const button = document.querySelector(".btn");
  const useLight = window.matchMedia("(prefers-color-scheme: light)");

  function toggleLightMode(state) {
    document.documentElement.classList.toggle("lightmode", state);
  }

  toggleLightMode(useLight.matches);
  useLight.addListener((evt) => toggleLightMode(evt.matches));

  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("lightmode");
  });
}

window.addEventListener("DOMContentLoaded", load);
