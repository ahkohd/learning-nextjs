const { pathToTitle } = require('utils/fns')

describe('tests for fns', () => {
    describe('pathToTitle', () => {
        it('returns a title from a given path', () => {
            expect(pathToTitle('/')).toBe('Nextful by Ahkohd')
        })

        it('returns About | Nextful if given path, /about', () => {
            expect(pathToTitle('/about')).toBe('About | Nextful')
        })

        it('returns About | Nextful if given path, /hello-world', () => {
            expect(pathToTitle('/hello-world')).toBe('Hello world | Nextful')
        })
    })
})
