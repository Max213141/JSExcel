import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from "@/components/table/table.tamplate";
import {$} from '@core/dom'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $resizer = $(event.target)
            // const $parent = $resizer.$el.parentNode //BAD!!!
            // const $parent = $resizer.$el.closest('.column') // little bit better
            const $parent = $resizer.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            console.log($parent.data)


            document.onmousemove = e => {
                console.log('mousemove')
                const delta = e.pageX - coords.right
                const value = coords.width + delta
                $parent.$el.style.width = value +'px'
                document.querySelectorAll(`[data-col = "${$parent.data.col}"]`)
                    .forEach(el => el.style.width = value + 'px')

            }

            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}
