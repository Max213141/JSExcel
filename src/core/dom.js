class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()// Hard to understand
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    find(selector) {
        return $(this.$el.querySelector(selector))
    }


    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }

        if (Element.prototype.append) {
            // eslint-disable-next-line max-len
            this.$el.append(node) // Если метод append присутствует в элементе то используем его
        } else {
            // eslint-disable-next-line max-len
            this.$el.appendChild(node) // Append работает не с классом DOM а с нативными элементами поэтому надо добавить .$el
        }
        return this // для возможности продолжать делать чейн
    }

    get data() {
        return this.$el.dataset
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }
    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    css( styles ={}) {
        Object
            .keys(styles)
            .forEach(key => {
            this.$el.style[key] = styles[key]
        })
    }

    addClass(className) {
        this.$el.classList.add(className)
    }

    removeClass(className) {
        this.$el.classList.remove(className)
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
