import $ from 'jquery'

export default class Modal {
  constructor () {
    this.openModalButton = $('.open-modal')
    this.modal = $('.modal')
    this.closeModalButton = $('.modal__close')

    this.events()
  }

  events () {
    this.openModalButton
      .click(ev => this.openModal(ev))

    this.closeModalButton
      .click(ev => this.closeModal(ev))

    $(document).keyup((ev) => this.keyPressHandler(ev))
  }

  openModal (ev) {
    ev.preventDefault()

    this.modal
      .addClass('modal--is-visible')
  }

  keyPressHandler (ev) {
    if (ev.keyCode === 27) {
      this.closeModal()
    }
  }

  closeModal (ev) {
    this.modal
      .removeClass('modal--is-visible')
  }
}
