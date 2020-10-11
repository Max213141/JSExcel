import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from "@/components/table/table.tamplate";

export class Table extends ExcelComponent {
    static className = 'excel__table'
    toHTML() {
        return createTable(20)
    }
}
