
export const validateString = (stg, regexp) => {
    const newRegExp = new RegExp(regexp)
    return newRegExp.test(stg)
}

export const validateStgLength = (stg, minLength, maxLength) => stg.length >= minLength && stg.length <= maxLength;

export const validateAge = (ageFrom, ageTo) => {
    if(ageFrom && ageTo) {
        const isInteger = Number.isInteger(Number(ageFrom)) && Number.isInteger(Number(ageTo))
        if(isInteger) {
            return Number(ageFrom) < Number(ageTo)
        }
    }
}