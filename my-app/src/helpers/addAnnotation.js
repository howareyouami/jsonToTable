import annotateData from '../data/annotateData.json';
import { replaceAll } from './replaceAll';

export const addAnnotation = (key, value) => {
    let annotated = value
    annotateData.forEach((annotateDataItem) => {
        const singleAnnotationgroup = annotateDataItem.annotations.annotations[key]
        if (singleAnnotationgroup) {
            singleAnnotationgroup.inclusion.forEach(i => {
                annotated = replaceAll(annotated, i, `<span class="annotate-green">${i}</span>`)
            });
            singleAnnotationgroup.exclusion.forEach(i => {
                annotated = replaceAll(annotated, i, `<span class="annotate-red">${i}</span>`)
            });
        }
    })

    return annotated
}