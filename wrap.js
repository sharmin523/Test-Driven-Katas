const wrap = (line, maxLen) => {
    const words = line.split(' ')
    let finalString = ''
    let currentString = ''

    if(line.length === 0) return ""

    if (maxLen) {
        words.forEach((word, index) => {
            if (index === 0 ) {
                currentString += word
            } else if (`${currentString} ${word}`.length <= maxLen) {
                currentString += ` ${word}`
            } else {
                finalString += `${currentString}\n`
                currentString = `${word}`
            }
            console.log(currentString)
        });

        finalString += `${currentString}`


        return finalString
    } else {
        return line;
    }
}

module.exports = wrap