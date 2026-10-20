const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }));
}
const progress = document.querySelector(".scroll-progress");
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();


const copyButton = document.getElementById("copyDiscordUsername");
const copyStatus = document.getElementById("copyStatus");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("zyvelle44_81620");

      copyStatus.textContent = "Discord username copied: zyvelle44_81620";
      copyButton.innerHTML = "Username Copied! <span>✓</span>";

      setTimeout(() => {
        copyButton.innerHTML = "Copy Discord Username <span>⧉</span>";
        copyStatus.textContent = "Discord username: zyvelle44_81620";
      }, 2500);
    } catch (error) {
      copyStatus.textContent =
        "Please copy manually: zyvelle44_81620";
    }
  });
}
