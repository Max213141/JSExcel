import {DomListener} from '@core/Domlistener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []
    console.log(options)

    this.prepare()
  }
  // Настраиваем компонент до init
  prepare() {}

  // Return Template of the component
  toHTML() {
    return ``
  }


  // уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Инициализация компонента
  // добавление DOM компонентов
  init() {
    this.initDOMListeners()
  }

  // удаляем компонент
  // Читстим слушатели
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach( unsub => unsub())
  }
}
