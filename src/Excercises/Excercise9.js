function filter_list(l) {
    const filtered = l.filter(element => {
        return typeof(element) === 'number'
    })

    return filtered
}

module.exports = filter_list