const dropDownMenuButtons = document.querySelectorAll('.menu-item-content')
const dropDownMenus = document.querySelectorAll('.drop-down-menu')

function openDropDownMenu(index) {
    dropDownMenus[index].classList.toggle('active')
    dropDownMenuButtons[index].classList.toggle('active')
}

dropDownMenuButtons.forEach((dropDownMenuButton, index) => {
    dropDownMenuButton.addEventListener('click', () => {
        openDropDownMenu(index)
    })
})