const nav = document.querySelector("nav");
const button = document.querySelector("button");

button.onclick = () => {
  nav.classList.toggle("active");
};
