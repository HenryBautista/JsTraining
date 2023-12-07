function countHours(year, holidays) {
    const days = holidays.map(holiday => {
        const date = new Date(`${holiday}/${year}`)
        
        return date.getDay()
    })
    
    const result = days.reduce((total, day) => {
        const hours = day > 0 && day < 6
            ? 2
            : 0
        
        return total + hours 
    }, 0)
    
    return result
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] 
const res = countHours(year, holidays)
console.log(res)

module.exports = countHours