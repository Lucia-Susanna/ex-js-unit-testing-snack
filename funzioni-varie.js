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

function isNotValid(titolo) {
    if (
        typeof titolo !== "string" ||
        titolo.trim() === ""
    ) {
        throw new Error("Titolo non valido");
    }
}

function findPostById(array, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id valido`)
    }
    array.forEach(element => {
        if (
            element.id === undefined ||
            element.title === undefined ||
            element.slug === undefined
        ) {
            throw new Error('l\'array non è nel formato corretto')
        }
    });
    return array.find(post => post.id === id) || null
}

module.exports = {
    getInitials,
    lowerCase,
    averege,
    createSlug,
    isPalindrome,
    isNotValid,
    findPostById
}