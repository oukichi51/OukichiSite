document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      try {
        const response = await fetch(file);
        if (response.ok) {
          el.innerHTML = await response.text();
        } else {
          console.error(`Failed to load ${file}: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error fetching ${file}:`, error);
      }
    }
  });
});
