import { addAnnotation } from './addAnnotation';

export const makeTableString = (dataFormatted) => {
    console.log("dataFormatted",dataFormatted)
    let tableString = ''
    dataFormatted.forEach((i) => {
        if (i) {
            tableString += `<h2>${i.sections[0]}</h2>`
            if (i.tables_xml.length) {
                tableString += `<table>`
                i.tables_xml.forEach((j) => {
                    tableString += addAnnotation(i.sections[0], j)
                })
                tableString += `</table>`
            } else {
                tableString += `<p>No table</p>`
            }
        }
    })
    return tableString
}