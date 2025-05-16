const { isSorted } = require('../src/merge')

describe('Merge Collection', () => {
  test('merge collection test: all the same length', () => {
    const collection = [1, 2, 3]
    expect(isSorted(collection, true)).toEqual(true)
  })
  test('merge collection test: all the same length', () => {
    const collection = [3, 4, 5, 6, 7, 8]
    expect(isSorted(collection, true)).toEqual(true)
  })
  test('merge collection test: all the same length', () => {
    const collection = [6, 5, 2]
    expect(isSorted(collection, false)).toEqual(true)
  })
  test('merge collection test: all the same length', () => {
    const collection = [1, 2, 3]
    expect(isSorted(collection, false)).toEqual(false)
  })
  test('merge collection test: all the same length', () => {
    const collection = [1, 2, 3]
    expect(isSorted(collection, true)).toEqual(true)
  })
  test('merge collection test: all the same length', () => {
    const collection = [3, 2, 1]
    expect(isSorted(collection, true)).toEqual(false)
  })
})
