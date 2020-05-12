export function sortArrayById(array) {
    return array.sort(function (a, b) {
        return b.id - a.id;
    });
}
