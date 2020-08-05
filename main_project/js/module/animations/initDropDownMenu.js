export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, () => {
      this.classList.remove('active')
    });
  }
  function outsideClick(element, callback) {
    const html = document.documentElement
    html.addEventListener('click', handleOutsideClick)
    function handleOutsideClick(event) {
        if(!element.contains(event.target))
          callback()
    }
  }
  dropDownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
