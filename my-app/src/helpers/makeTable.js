import { addAnnotation } from './addAnnotation';

export const makeTableString = (data) => {
    const dataFormatted = Object.keys(data.deIdentifiedFile.file).map((i) => {
        const item = data.deIdentifiedFile.file[i]
        if (item.text_extract && item.text_extract.tables_xml)
            return ({
                sections: item.text_extract.sections,
                tables_xml: item.text_extract.tables_xml
            })
    })
    let tableString = ''
    dataFormatted.forEach((i) => {
        if (i) {
            tableString += `<h2>${i.sections[0]}</h2>`
            tableString += `<table>`
            i.tables_xml.forEach((j) => {
                tableString += addAnnotation(i.sections[0], j)
            })
            tableString += `</table>`
        }
    })
    return tableString
}