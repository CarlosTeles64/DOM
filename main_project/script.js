function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add('ativo')
  
  if(tabContent.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }
    
    tabMenu.forEach((content, index) => {
      content.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'ativo'
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

function smoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
  
  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

function initScrollAnimation() {  

  const sections = document.querySelectorAll('.js-section')
  const halfWindow = window.innerHeight * 0.8
  if (sections.length > 0) {

    sections[0].classList.add('ativo')
    window.addEventListener('scroll', () => {

      sections.forEach((section) => {
        const sectionOffSet = section.getBoundingClientRect()
        const sectionOffSetTop = (sectionOffSet.top - halfWindow) < 0
        if(sectionOffSetTop)
          section.classList.add('ativo')
        else 
          section.classList.remove('ativo')
      })
    })
  }
}

initTabNav()
initAccordion()
smoothScroll()
initScrollAnimation()