const tabButtons = document.querySelectorAll('.js-tabcontent li')
const tabContents = document.querySelectorAll('.js-content div')

tabContents[0].classList.add('active')
tabButtons[0].classList.add('activeButton')

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', () => {

    tabButtons.forEach((button) => {
      button.classList.remove('activeButton')
    })

    tabButton.classList.add('activeButton')
    
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active')
    })

    tabContents[index].classList.add('active')
    
  })
})