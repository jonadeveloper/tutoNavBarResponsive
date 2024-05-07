const toggle = document.getElementById("toggle");
const sections = document.getElementById("sections");

toggle.onclick = () => {
  sections.classList.toggle("open");
};
