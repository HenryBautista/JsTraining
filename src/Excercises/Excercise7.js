function disemvowel(str) {
    const result = str.replace(/[aeiou]/gi, '')
    return result;
}

module.exports = disemvowel