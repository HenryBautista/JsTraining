function getGiftsToRefill(a1, a2, a3) {

    const set1 = new Set([...a1])
    const set2 = new Set([...a2])
    const set3 = new Set([...a3])
    const merged = [...set1, ...set2, ...set3]
    const set = new Set([...merged])
    const container = {}

    set.forEach((element) => {
        container[element] = 0
    })

    merged.forEach((element) => {
        if (container.hasOwnProperty(element)) {
            container[element]++;
        }
    })

    const result = Object.keys(container).filter((key) => {
        return container[key] === 1
    })

    return result
}

module.exports = getGiftsToRefill
