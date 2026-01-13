




document.getElementById("year").textContent = new Date().getFullYear();

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 120}ms`;
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
        entry.target.style.transitionDelay = "0ms";
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));
