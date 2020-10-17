export class Emitter {
    constructor() {
        this.listeners = {}
    }

    //Уведомляем слушателей если они есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

    //Подписываемся на уведомления
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event]=
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}


// EXAMPLE
// const emitter = new Emitter()
// const unsub = emitter.subscribe('Max', data => console.log('Sub', data))
//
// emitter.emit('Max', 42)
//
//
// setTimeout( () => {
//     emitter.emit('Max', 'after 2')
// }, 2000)
//
// setTimeout( () => {
//     unsub()
// }, 3000)
//
// setTimeout( () => {
//     emitter.emit('Max', 'after 4')
// }, 4000)