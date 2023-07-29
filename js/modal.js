export const Modal = {
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    },

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
}

Modal.buttonClose.onclick = () => {Modal.close()}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    if(event.key === 'Escape') {Modal.close()}
}
