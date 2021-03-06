import {DomListener} from '@core/Domlistener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []


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

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // Сюда прихоздят только изменения по тем полям на котоорые мы подписались
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
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
