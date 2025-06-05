const { getInitials, lowerCase, averege, createSlug, isPalindrome } = require("./funzioni-varie")

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials('Lucia Susanna');
    expect(initials).toBe('LS')
})

test('La funzione lowerCase restituisce una stringa in lowercase.', () => {
    const parolaMinuscola = lowerCase('Ciao')
    expect(parolaMinuscola).toBe('ciao')
    expect(lowerCase('LUCIA')).toBe('lucia')
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

test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('ciao come stai?')).toBe('ciao-come-stai?')
})


test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('anna')).toBeTruthy()
})