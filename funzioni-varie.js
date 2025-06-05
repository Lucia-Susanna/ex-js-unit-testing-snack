function getInitials(name) {
    const nomeCompleto = name.split(' ')

    return nomeCompleto.map(parola => parola[0].toUpperCase()).join('')
}


function lowerCase(parola) {
    return parola.toLowerCase()
}


function averege(arr) {
    const somma = arr.reduce((acc, val) => acc + val, 0)
    return somma / arr.length
}

function createSlug(frase) {
    return frase.replaceAll(' ', '-')
}

function isPalindrome(parola) {
    const parolaAlContrario = parola.split('').reverse().join('')
    return parola.toLowerCase() === parolaAlContrario.toLowerCase() ? true : false
}

module.exports = {
    getInitials,
    lowerCase,
    averege,
    createSlug,
    isPalindrome
}