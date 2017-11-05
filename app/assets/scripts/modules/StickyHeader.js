import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'

export default class StickyHeader {
  constructor () {
    this.siteHeader = $('.site-header')
    this.headerTriggerElement = $('.large-hero__title')
    this.pageSections = $('.page-section')
    this.headerLinks = $('.primary-nav a')

    this.createHeaderWaypoint()
    this.createPageSectionWaypoints()
    this.addSmoothScrolling()
  }

  addSmoothScrolling () {
    this.headerLinks.smoothScroll()
  }

  createHeaderWaypoint () {
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: (direction) => {
        if (direction == 'down') {
          this.siteHeader
            .addClass('site-header--dark')
        } else {
          this.siteHeader
            .removeClass('site-header--dark')
        }
      }

    })
  }

  createPageSectionWaypoints () {
    this.pageSections.each((index, pageSection) => {
      new Waypoint({
        element: pageSection,
        offset: '18%',
        handler: (direction) => {
          if (direction === 'down') {
            const matchingHeaderLink = pageSection
              .getAttribute('data-matching-link')

            this.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        }
      })

      new Waypoint({
        element: pageSection,
        offset: '-40%',
        handler: (direction) => {
          if (direction === 'up') {
            const matchingHeaderLink = pageSection
              .getAttribute('data-matching-link')

            this.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        }
      })
    })
  }
}
