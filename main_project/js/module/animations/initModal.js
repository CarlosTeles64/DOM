export default function initModal() {
    const closeButton = document.querySelector('[data-modal="close"]')
    const openButton = document.querySelector('[data-modal="open"]')
    const modal = document.querySelector('[data-modal="container"]')
    
    function toogleModal(event) {
        event.preventDefault()
        modal.classList.toggle('ativo')
    }
    function closeModal(event) {
        if(event.target === this) {
            modal.classList.remove('ativo')
        }
    }
    closeButton.addEventListener('click', toogleModal)
    openButton.addEventListener('click', toogleModal)
    modal.addEventListener('click', closeModal)
}
