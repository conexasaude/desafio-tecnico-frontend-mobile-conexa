import formatsDate from "./formatsDate"

const testDate = "1997-06-06 06:15"

describe(('formatsDate'), () => {
    it('should format to day-month-year', () => {
        const formattedDate = formatsDate(testDate, 'day-month-year')
    
        expect(formattedDate).toBe('06/06/1997')
    })
    
    it('should format to time', () => {
        const formattedDate = formatsDate(testDate, 'time')
    
        expect(formattedDate).toBe('06:15')
    })
    
    it('should format to weekday-date-time', () => {
        const formattedDate = formatsDate(testDate, 'weekday-date-time')
    
        expect(formattedDate).toBe('sex. 6 jun. 1997 - 06:15')
    })
})