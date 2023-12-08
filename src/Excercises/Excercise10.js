const isSquare = function (n) {
    const root = Math.sqrt(n)
    
    return Number.isInteger(root)
}

console.log(isSquare(-1))

module.exports = isSquare