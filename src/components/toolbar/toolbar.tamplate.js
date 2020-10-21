function toButton(button) {
    const json = JSON.stringify(button.value)
    const meta = `
        data-type = "button"
        data-value = '${json}'
    `
    return `
        <div class="button ${button.active ? 'active' : ''}"
        ${meta}>
            <i class="material-icons"
            ${meta}
            >${button.icon}</i>
        </div>`
}

export function createToolbar(state) {
    const buttons = [
        {
            icon: 'format_align_left',
            active: false,
            value: {textAlign: 'left'}
        },
        {
            icon: 'format_align_right',
            active: false,
            value: {textAlign: 'right'}
        },
        {
            icon: 'format_align_center',
            active: false,
            value: {textAlign: 'center'}
        },
        {
            icon: 'format_bold',
            active: state['fontWeight'] === 'bold' ? 'normal' : 'bold',
            value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
        },
        {
            icon: 'format_italic',
            active: false,
            value: {fontStyle: 'italic'}
        },
        {
            icon: 'format_underlined',
            active: false,
            value: {textDecoration: 'underline'}
        }
    ]

    return buttons.map(but => toButton(but)).join('')
}