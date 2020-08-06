import clickOutside from "./outSideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  const userEvents = ["click", "touchstart"];

  function openMenu() {
    menuButton.classList.add("active");
    menuList.classList.add("active");
    clickOutside(menuList, userEvents, () => {
      menuButton.classList.remove("active");
      menuList.classList.remove("active");
    });
  }

  userEvents.forEach((userEvent) => {
    menuButton.addEventListener("click", openMenu);
  });
}
