import {DomListener} from '@core/Domlistener';

export class ExcelComponent extends DomListener {

  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
  }

  // Return Template of the component
  toHTML() {
    return ``
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
