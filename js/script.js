"use strict";
//open and close toggle function
gsap.config({
  nullTargetWarn: false,
});
//navbar
gsap.to(".navbar", {
  background: "rgb(53 60 75)",

  scrollTrigger: {
    trigger: [".header"],
    start: "10px top",
    end: "10px -15px",
    scrub: 1,
  },
});

gsap.to([".navbar__list--active", ".navbar__menu__icon"], {
  color: "#ffffff",

  scrollTrigger: {
    trigger: [".header"],
    start: "10px top",
    end: "10px -15px",
    scrub: 1,
  },
});
//navbar
gsap.to([".navbar__logo"], {
  filter: "invert(100%)",
  scrollTrigger: {
    trigger: [".header"],
    start: "10px top",
    end: "10px -15px",
    scrub: 1,
  },
});
//navbar
gsap.to([".navbar__logo--container"], {
  borderColor: "#ffd700",
  scrollTrigger: {
    trigger: [".header"],
    start: "10px top",
    end: "10px -15px",
    scrub: 1,
  },
});
//navbar

console.log("97701 test");
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");

const menu = document.querySelector(".menu");

const opentl = gsap.timeline();

btnOpen.addEventListener("click", function () {
  gsap.to(menu, {
    left: 0,
    duration: 0.5,
    ease: "power4",
  });
});

const closetl = gsap.timeline();

btnClose.addEventListener("click", function () {
  closetl.to(menu, {
    left: "-100%",
    duration: 0.5,
    ease: "power4",
  });
});
