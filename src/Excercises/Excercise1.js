function wrapping(gifts) {
    const wrapped = gifts.map(gift => {
        const wrapLength = gift.length + 2
        const wraper = '*'.repeat(wrapLength)
        const wrapedGift = `${wraper}\n*${gift}*\n${wraper}`
        
        return wrapedGift
    });

    return wrapped
}

module.exports = wrapping