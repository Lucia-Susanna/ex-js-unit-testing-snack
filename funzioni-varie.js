function getInitials(name) {
    const nomeCompleto = name.split(' ')

    return nomeCompleto.map(parola => parola[0].toUpperCase()).join('')
}

module.exports = {
    getInitials
}