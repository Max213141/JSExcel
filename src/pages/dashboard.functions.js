import {storage} from "@core/utils";

function toHTML(key) {
    const model = storage(key)
    const id = key.split(':')[1]
    return `
    <li class="db__record">
        <a href="#excel/${id}">${model.title}</a>
        <strong>12.06.2020</strong>
    </li>
    `
}

function getAllKEys() {
    const keys = []
    for (let i=0; i<localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.includes('excel')) {
            continue
        }
        keys.push(key)
    }
    return keys
}

export function createRecordsTable() {
    const keys = getAllKEys()

    if (!keys.length) {
        return `<p>You didn't create any table</p>`
    }

    return `<div class="db__list-header">
        <span>Name</span>
        <span>Open Date</span>
    </div>

    <ul class="db__list">
        ${keys.map(toHTML).join('')}
    </ul>
    `
}