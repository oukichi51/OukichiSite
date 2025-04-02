document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = async (selector, file) => {
    const element = document.querySelector(selector);
    if (element) {
      try {
        const response = await fetch(file);
        if (response.ok) {
          element.innerHTML = await response.text();
        } else {
          console.error(`Failed to fetch ${file}: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error fetching ${file}:`, error);
      }
    }
  };

  includeHTML("header[data-include]", "../components/header.html");
  includeHTML("footer[data-include]", "../components/footer.html");
});
