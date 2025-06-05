const { getInitials } = require("./funzioni-varie")

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials('Lucia Susanna');
    expect(initials).toBe('LS')
})