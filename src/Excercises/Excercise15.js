function candies(kids) {

    if (kids.length <= 1) {
        return -1
    }

    const sortedKids = kids.sort((a, b) => b - a)
    const highest = sortedKids[0]

    const result = sortedKids.reduce((total, kid) => {
        return total += highest - kid
    }, 0)

    return result
}

module.exports = candies