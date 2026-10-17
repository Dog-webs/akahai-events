/* Small interactions for the bus-tour pages only. */
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
