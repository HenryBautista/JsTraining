function isValidWalk(walk) {
    const walked = walk.reduce((total, way) => {
        switch (way) {
            case 'n':
                return total += 1 
            case 's':
                return total += -1
            case 'w':
                return total += -1
            case 'e':
                return total += 1
        }
    }, 0)

    return walked === 0
}

module.exports = isValidWalk