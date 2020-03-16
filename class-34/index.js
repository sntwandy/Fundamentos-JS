function howManyDays(today, dateOfBirth){
    const aDay = 1000 * 60 * 60 * 24
    const difference = Math.abs(today - dateOfBirth)

    return Math.floor(difference / aDay)
}

const today = new Date()
const dateOfBirth = new Date(1998, 5, 29)