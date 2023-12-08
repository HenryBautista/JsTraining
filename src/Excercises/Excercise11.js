function isIsogram(str) {
    const container = {}
    let result = true

    Array.from(str.toLowerCase()).forEach((letter) => {
        console.log(container)
        if ('aeiou'.includes(letter)) {
            if (container[letter]) {
                result = false
                return
            } else {
                container[letter] = true
            }
        }
    })

    return result
}

module.exports = isIsogram