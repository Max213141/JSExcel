import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'excel__table'
    toHTML() {
        return `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">
            <div class="column">
               A
            </div>
        </div>
    </div>

    <div class="row">
        <div class="row-info"> 1</div>
            <div class="row-data">
                <div class="cell selected" contenteditable="true">1</div>
                <div class="cell" contenteditable="true">2</div>
                <div class="cell" contenteditable="true">3</div>
            </div>
        </div>
    <div class="row">
        <div class="row-info">2</div>
            <div class="row-data">
            <div class="cell ">1</div>
            <div class="cell">2</div>
            <div class="cell">3</div>
        </div>
    </div>
        `
    }
}
