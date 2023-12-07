function fitsInOneBox(boxes) {

    const sortedBoxes = boxes.sort((a, b) => {
        if (a.l !== b.l) {
            return a.l - b.l
        }

        if (a.w !== b.w) {
            return a.w - b.w
        }

        return a.h - b.h
    })

    for (let index = 0; index < sortedBoxes.length - 1; index++) {
        const box = sortedBoxes[index];
        const nextBox = sortedBoxes[index+1]

        if (box.l >= nextBox.l 
            || box.w >= nextBox.w
            || box.h >= nextBox.h) {
            
            return false
        }
    }

    return true
}

module.exports = fitsInOneBox
