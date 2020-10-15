import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom'
import {createTable} from "@/components/table/table.tamplate";
import {resizeHandler} from "@/components/table/table.resize";
import {isCell, shoudResize} from "@/components/table/table.functions";
import {TableSelection} from "@/components/table/TableSelectrion";

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

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()

        const $cell = this.$root.find('[data-id="0:0"]')
        console.log($cell)
        this.selection.select($cell)
    }

    onMousedown(event) {
        if (shoudResize(event)) {
            resizeHandler(this.$root, event)
        } else if (isCell(event)) {
           const $target = $(event.target)
           this.selection.select($target)
        }
    }
}

