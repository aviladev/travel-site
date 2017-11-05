import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

export default class RevealOnScroll {
  constructor (elements, offset) {
    this.itemsToReveal = elements
    this.offsetPercentage = offset
    this.hideInitially()
    this.createWaypoints()
  }

  hideInitially () {
    this.itemsToReveal.addClass('reveal-item')
  }

  createWaypoints () {
    this.itemsToReveal
      .each((index, item) =>
        new Waypoint({
          element: item,
          offset: this.offsetPercentage,
          handler: () => $(item)
            .addClass('reveal-item--is-visible')
        })
      )
  }
}
