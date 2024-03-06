export function SOrNoS(array: any[]) {
    if (array && array.length === 1) {
        return ''
    } else if (array) {
        return 's'
    }
}