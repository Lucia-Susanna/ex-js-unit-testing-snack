const { getInitials, lowerCase, averege, createSlug, isPalindrome, isNotValid, findPostById } = require("./funzioni-varie")

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



test("La funzione isNotValid lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => isNotValid("")).toThrow();
    expect(() => isNotValid(123)).toThrow();
})

let posts

beforeEach(() => {
    posts = [
        {
            id: 1,
            title: "Introduzione a JavaScript",
            slug: "introduzione-a-javascript"
        },
        {
            id: 2,
            title: "Guida a React per principianti",
            slug: "guida-a-react-per-principianti"
        },
        {
            id: 3,
            title: "Come usare Git e GitHub",
            slug: "come-usare-git-e-github"
        },
        {
            id: 4,
            title: "10 trucchi CSS da conoscere",
            slug: "10-trucchi-css-da-conoscere"
        }
    ];
})

afterEach(() => {
    posts = []
})


test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Guida a React per principianti", slug: "guida-a-react-per-principianti" })
    expect(findPostById(posts, 6)).toBe(null)
    expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id valido')
    expect(() => findPostById(numeri, 4)).toThrow('l\'array non è nel formato corretto')
})