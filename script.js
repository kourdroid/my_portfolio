const nav = document.getElementById('nav')
const toggle = document.getElementById('toggle')

toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click event from propagating to the document
  nav.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (
    !nav.contains(e.target) &&
    !toggle.contains(e.target) &&
    !nav.classList.contains("hidden")
  ) {
    nav.classList.add("hidden");
  }
});
