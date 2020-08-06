import outSideClick from './outSideClick.js'

export default function initDropDownMenu() {

  const dropDownMenuButton = document.querySelector("[data-dropdown]");
  const userEvents = ["click", "touchstart"];


  function handleClick(event) {
    event.preventDefault();

    this.classList.toggle("active");

    outSideClick(this, userEvents, () => {
      this.classList.remove("active");
    });
  }

  userEvents.forEach((event) => {
    dropDownMenuButton.addEventListener(event, handleClick);
  });
}
