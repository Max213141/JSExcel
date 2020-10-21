import {ExcelComponent} from '@core/ExcelComponent';
import {$} from "@core/dom";

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            subscribe: ['currentText'],
            ...options
        })
    }

    toHTML() {
        return ` 
        <div class="info"> fx</div>
          <div id="formula" class="input" contenteditable="true" spellcheck="false">
        </div>
        `
   }

   init() {
       super.init();

       this.$formula = this.$root.find('#formula')

       this.$on('table:select', $cell => {
           this.$formula.text($cell.text())
       })

       // this.$on('table:input', $cell => {
       //     this.$formula.text($cell.text())
       // })

       // this.$subscribe(state => {
       //     console.log('Formula update:', state.currentText)
       //     this.$formula.text(state.currentText)
       // })
   }

   storeChanged({currentText}) {
       this.$formula.text(currentText)
   }

    onInput(event) {
       this.$emit('formula:input', $(event.target).text()) // откуда/какое событие
   }

   onKeydown(event) {
        const keys = ['Enter', 'Tab']
        if (keys.includes(event.key)) {
            event.preventDefault()
            this.$emit('formula:done')
        }
   }
}
