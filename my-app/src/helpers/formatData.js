export const formatData = (data) => {
    return Object.keys(data.deIdentifiedFile.file).map((i) => {
        const item = data.deIdentifiedFile.file[i]
        if (item.text_extract && item.text_extract.tables_xml)
            return ({
                sections: item.text_extract.sections,
                tables_xml: item.text_extract.tables_xml
            })
    }).filter((i) => i)
}