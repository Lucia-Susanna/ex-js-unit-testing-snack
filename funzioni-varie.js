function getInitials(name) {
    const nomeCompleto = name.split(' ')

    return nomeCompleto.map(parola => parola[0].toUpperCase()).join('')
}


function createSlug(parola) {
    return parola.toLowerCase()
}
module.exports = {
    getInitials,
    createSlug
}