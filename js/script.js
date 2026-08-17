document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });
});

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("form-status").textContent =
    `Thanks ${name}! I am is ready to connect to your email service.`;
  event.target.reset();
}
