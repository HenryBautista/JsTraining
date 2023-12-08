function squareDigits(num) {
    const input = num + ''
    const squares = Array.from(input).map((digit) => {
        const number = Math.pow(Number(digit), 2)

        return number+''
    })
    const result = squares.reduce((total, num) =>
        total + num, '')
    
    return Number(result);
}

module.exports = squareDigits