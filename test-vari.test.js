const { getInitials, createSlug } = require("./funzioni-varie")

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials('Lucia Susanna');
    expect(initials).toBe('LS')
})

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    const parolaMinuscola = createSlug('Ciao')
    expect(parolaMinuscola).toBe('ciao')
})