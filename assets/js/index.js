document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".f-search-box");
  if (!boxes.length) return; 

  boxes.forEach(box => {
    const input = box.querySelector("input");
    if (!input) return;

    input.addEventListener("focus", () => box.classList.add("active"));
    input.addEventListener("blur",  () => box.classList.remove("active"));
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".f-sidebar-nav");
    if (!sidebar) return; 

    const links = sidebar.querySelectorAll("ul li a");
    if (!links.length) return;

    links.forEach(link =>
        link.addEventListener("click", e => {
            e.preventDefault();
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        })
    );
});





document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".f-wrapper");
    const arrowBtn = document.querySelector(".icon-arrowUpLine");
    const burger = document.querySelector(".f-burger");

    if (!wrapper) return;

    arrowBtn?.addEventListener("click", () => {
        wrapper.classList.remove("active");
        wrapper.classList.add("inActive");
    });

    burger?.addEventListener("click", () => {
        wrapper.classList.remove("inActive");
        wrapper.classList.add("active");
    });
});
