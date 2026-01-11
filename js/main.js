const reveals = document.querySelectorAll(".reveal");

const handleScrollReveal = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    const isVisible =
      elementTop < windowHeight - revealPoint &&
      elementBottom > revealPoint;

    if (isVisible) {
      // STAGGER ONLY IF MARKED
      if (el.hasAttribute("data-stagger")) {
        el.style.transitionDelay = `${index * 0.12}s`;
      } else {
        el.style.transitionDelay = "0s";
      }

      el.classList.add("active");
    } else {
      el.classList.remove("active");
      el.style.transitionDelay = "0s";
    }
  });
};

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("resize", handleScrollReveal);
handleScrollReveal();

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalTag = document.getElementById("modal-tag");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.description;
    modalTag.textContent = card.dataset.tag;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

const closeModal = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
};

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});




document.getElementById("year").textContent = new Date().getFullYear();
