import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom'
import {createTable} from "@/components/table/table.tamplate";
import {resizeHandler} from "@/components/table/table.resize";
import {isCell, matrix, nextSelector, shoudResize} from "./table.functions";
import {TableSelection} from "@/components/table/TableSelectrion";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown'],
            ...options
        });
    }

    toHTML() {
        return createTable(20)
    }

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()

        const $cell = this.$root.find('[data-id="0:0"]')
        console.log($cell)
        this.selection.select($cell)

        this.$on('formula:input', text => {
            this.selection.current.text(text)
        })
    }

    onMousedown(event) {
        if (shoudResize(event)) {
            resizeHandler(this.$root, event)
        } else if (isCell(event)) {
            const $target = $(event.target)
            if (event.shiftKey) {
                const $cells = matrix($target, this.selection.current)
                    .map(id => this.$root.find(`[data-id = "${id}"]`))
                this.selection.selectGroup($cells)
           } else {
                this.selection.select($target)
           }
        }

    }

    onKeydown(event) {
        const keys = ['Enter',
            'Tab',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown']

        const {key} = event

        if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault()
            const id = this.selection.current.id(true)

            const $next = this.$root.find(nextSelector(key, id));
            this.selection.select($next)
        }
    }
}


