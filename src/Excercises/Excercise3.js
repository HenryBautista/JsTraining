function distributeGifts(packOfGifts, reindeers) {

    const reindersCapacity = reindeers.reduce((total, reindeer) => {
        return total + (reindeer.length * 2)
    }, 0)

    const totalWeight = packOfGifts.reduce((total, gift) => {
        return total + gift.length
    }, 0)

    return Math.trunc(reindersCapacity / totalWeight)
}

// Assignment Web doesn't allow more than a function, so I commented this
//
// const maximumCarryCapacity = (reindeers) => {
//     const totalCapacity = reindeers.reduce((total, reindeer) => {
//         return total + (reindeer.length * 2)
//     }, 0)

//     return totalCapacity
// }

// const giftsWeight = (gifts) => {
//     const totalWeight = gifts.reduce((total, gift) => {
//         return total + gift.length
//     }, 0)

//     return totalWeight
// }

module.exports = distributeGifts