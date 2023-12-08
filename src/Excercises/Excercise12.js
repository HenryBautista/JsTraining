String.prototype.toJadenCase = function () {
    const words = this.split(' ')
    const jadenWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    });

    return jadenWords.join(' ')
};

module.exports = String.prototype.toJadenCase