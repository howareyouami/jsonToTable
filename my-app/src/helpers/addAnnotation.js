import annotateData from '../data/annotateData.json';
import { replaceAll } from './replaceAll';

export const addAnnotation = (key, value) => {
    let annotated = value
    const currentAnnotations = annotateData[0].annotations.annotations[key]
    if (currentAnnotations) {
        currentAnnotations.inclusion.forEach(i => {
            annotated = replaceAll(annotated, i, `<span class="annotate-green">${i}</span>`)
        });
        currentAnnotations.exclusion.forEach(i => {
            annotated = replaceAll(annotated, i, `<span class="annotate-red">${i}</span>`)
        });
    }
    return annotated
}