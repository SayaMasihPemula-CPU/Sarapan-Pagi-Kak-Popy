const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const toast = document.getElementById("toast");
let toastTimer;

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    toast.textContent = button.dataset.choice + " — pilihanmu sudah dicatat di halaman ini!";
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  });
});
