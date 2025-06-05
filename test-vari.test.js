const { getInitials, createSlug, averege } = require("./funzioni-varie")

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials('Lucia Susanna');
    expect(initials).toBe('LS')
})

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    const parolaMinuscola = createSlug('Ciao')
    expect(parolaMinuscola).toBe('ciao')
    expect(createSlug('LUCIA')).toBe('lucia')
})

let numeri

beforeEach(() => {
    numeri = [8, 10, 12, 14]
})

afterEach(() => {
    numeri = []
})



test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    const mediaNumeri = averege(numeri)
    expect(mediaNumeri).toBe(11)
})