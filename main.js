function fadeIn() {
  document.body.classList.remove("fade-out");
  document.body.classList.add("ready");
}

window.addEventListener("DOMContentLoaded", fadeIn);
window.addEventListener("pageshow", fadeIn);

document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#')) return;

  a.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove("ready");
    document.body.classList.add("fade-out");
    setTimeout(() => window.location.href = href, 350);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
