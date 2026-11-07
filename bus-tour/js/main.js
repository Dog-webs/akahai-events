
/* =====================================
   AKAHAI BUS TOUR
   Main JavaScript
===================================== */

(() => {

  /* -----------------------------
     モバイルメニュー
  ----------------------------- */

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {

    toggle.addEventListener("click", () => {

      const isOpen =
        toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

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


  /* -----------------------------
     ハワイアン風パーティクル
  ----------------------------- */

  const particleCanvas =
    document.querySelector(".detail-particles");

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (
    particleCanvas &&
    window.Particles &&
    !prefersReducedMotion
  ) {

    Particles.init({

      selector: ".detail-particles",

      /* 粒子の数 */
      maxParticles: 38,

      /* 粒子サイズ */
      sizeVariations: 4,

      /* ハワイアンカラー */
      color: [
        "#69C8C5",
        "#8EDBD2",
        "#FF9B7A",
        "#F7C98A",
        "#FFFFFF"
      ],

      /* 粒子の動く速度 */
      speed: 0.25,

      /* 粒子同士の距離 */
      minDistance: 120,

      /* 接続線は表示しない */
      connectParticles: false,

      /* 画面サイズに合わせて調整 */
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 20,
            sizeVariations: 3,
            speed: 0.2
          }
        }
      ]

    });

  }

})();
