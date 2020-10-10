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

    on(){

    }

    append(node) {
        console.log(node)
        if (node instanceof Dom) {
            node = node.$el
        }

        if (Element.prototype.append) {
            this.$el.append(node) // Если метод append присутствует в элементе то используем его
        } else {
            this.$el.appendChild(node) // Append работает не с классом DOM а с нативными элементами поэтому надо добавить .$el
        }
        return this // для возможности продолжать делать чейн
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
