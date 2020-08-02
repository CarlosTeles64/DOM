const modal = document.querySelector('[data-modal="modal"]')
const joinUsButton = document.querySelector('[data-button="joinUs"]')

function initAnimateModal() {
    modal.classList.add('active')
}

joinUsButton.addEventListener('click', initAnimateModal)