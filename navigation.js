const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// When someone clicks the hamburger button
navToggle.addEventListener("click", () => {
  const visibilty = nav.getAttribute("data-visible");

  console.log(navToggle.getAttribute("aria-expanded"));

  if (visibilty === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
