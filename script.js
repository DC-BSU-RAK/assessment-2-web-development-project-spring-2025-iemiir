// Dark mode toggle (if you want to allow switching)
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Dark Mode";
  toggleBtn.style.marginTop = "15px";
  toggleBtn.style.padding = "10px";
  toggleBtn.style.backgroundColor = "#00bfff";
  toggleBtn.style.color = "#000";
  toggleBtn.style.border = "none";
  toggleBtn.style.cursor = "pointer";

  const footer = document.querySelector("footer");
  footer.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
