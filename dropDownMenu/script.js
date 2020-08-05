const dropDownMenuButtons = document.querySelectorAll("[data-dropdown]");

function handleClick() {
  this.classList.toggle("active");
  outsideClick(this, () => {
    this.classList.remove("active");
  });
}

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener("click", handleOutsideClick);
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}

dropDownMenuButtons.forEach((dropDownMenuButton) => {
  dropDownMenuButton.addEventListener("click", handleClick);
});
