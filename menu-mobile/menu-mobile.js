const openButton = document.querySelector('[data-button="open"]');
const closeButton = document.querySelector('[data-button="close"]');
const mobileMenu = document.querySelector("[data-menu]");

const userEvents = ["click", "touchstart"];

const body = document.body;

function handleClick(element) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside, "")) {
    userEvents.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleClickOutside));
    });
  }

  element.setAttribute(outside, "");

  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      userEvents.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside);
      });
      element.removeAttribute(outside);
      closeMenu();
    }
  }
}

function openMenu() {
  body.classList.add("active");
  mobileMenu.classList.add("active");
  openButton.classList.add("disable");

  handleClick(mobileMenu);
}
function closeMenu() {
  body.classList.remove("active");
  mobileMenu.classList.remove("active");
  openButton.classList.remove("disable");
}

userEvents.forEach((userEvent) => {
  openButton.addEventListener(userEvent, openMenu);
});

userEvents.forEach((userEvent) => {
  closeButton.addEventListener(userEvent, closeMenu);
});
