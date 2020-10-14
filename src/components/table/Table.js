import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from "@/components/table/table.tamplate";
import {resizeHandler} from "@/components/table/table.resize";
import {shoudResize} from "@/components/table/table.functions";

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
        if (shoudResize(event)) {
            resizeHandler(this.$root, event)
        }
    }
}

