
export const useParser = () => {
    
    const convertToObj = (stringObj) => {

        try {
            if (stringObj)
                return JSON.parse(stringObj)
        } catch(error) {
            console.log(error)
        }
    }

    return [convertToObj]
}