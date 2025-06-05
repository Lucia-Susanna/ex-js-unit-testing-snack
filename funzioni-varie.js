function getInitials(name) {
    const nomeCompleto = name.split(' ')

    return nomeCompleto.map(parola => parola[0].toUpperCase()).join('')
}


function createSlug(parola) {
    return parola.toLowerCase()
}


function averege(arr) {
    const somma = arr.reduce((acc, val) => acc + val, 0)
    return somma / arr.length
}

module.exports = {
    getInitials,
    createSlug,
    averege
}