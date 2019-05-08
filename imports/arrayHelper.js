export function generateArray(size) {
    return Array.from(Array(size), () => Math.floor(Math.random() * (size - 1)) + 1)
}