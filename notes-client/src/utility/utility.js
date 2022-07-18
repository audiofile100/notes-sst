export function path(value) {
    return "/" + value.replaceAll(/\s/g, '').toLowerCase();
}