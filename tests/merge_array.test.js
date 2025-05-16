const { mergeArray, isSorted } = require('../src/merge')

function mergeArrayTest(collection_1, collection_2, collection_3) {
  if (
    !isSorted(collection_1, true) ||
    !isSorted(collection_2, true) ||
    !isSorted(collection_3, false)
  ) {
    return 'invalid array value'
  }

  const c1 = [...collection_1]
  const c2 = [...collection_2]
  const c3 = [...collection_3].sort((a, b) => a - b)

  return [...c1, ...c2, ...c3].sort((a, b) => a - b)
}

describe('Merge Collection', () => {
  // ------------ 1. All arrays same length & sorted ------------
  test('merge collection test: all the same length', () => {
    const collection_1 = [1, 2, 3]
    const collection_2 = [3, 4, 5]
    const collection_3 = [8, 7, 6]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  // ------------ 2. All arrays same length & sorted ------------
  test('merge collection test: all the same value different length', () => {
    const collection_1 = [1, 1, 1]
    const collection_2 = [1, 1, 1]
    const collection_3 = [1, 1, 1]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  // // ------------ 3. Arrays different length ------------
  test('merge collection test: 3rd collection does not the same length', () => {
    const collection_1 = [1, 2, 3, 4, 5, 6]
    const collection_2 = [2, 3, 4, 5, 6, 7]
    const collection_3 = [9, 6, 5]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  test('merge collection test: 1st collection does not the same length', () => {
    const collection_1 = [1, 2]
    const collection_2 = [2, 3, 4, 5]
    const collection_3 = [9, 6, 5, 4]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  test('merge collection test: 2nd collection does not the same length', () => {
    const collection_1 = [1, 2, 3, 4, 5, 6]
    const collection_2 = [2, 3, 4, 5]
    const collection_3 = [9, 6, 5, 4, 3, 2]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  test('merge collection test: all collection are different length', () => {
    const collection_1 = [1, 4, 5, 6]
    const collection_2 = [2, 4]
    const collection_3 = [9, 8, 2]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  // ------------ 4. Some arrays are empty ------------
  test('merge collection test: some arrays are empty', () => {
    const collection_1 = []
    const collection_2 = [1, 2, 3]
    const collection_3 = [5, 4, 3]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  test('merge collection test: some arrays are empty', () => {
    const collection_1 = []
    const collection_2 = []
    const collection_3 = [5, 4, 3]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  test('merge collection test: some arrays are empty', () => {
    const collection_1 = []
    const collection_2 = []
    const collection_3 = []
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
  // ------------ 5. One or more array not sorted ------------
  test('merge collection test: one or more array not sorted', () => {
    const collection_1 = [2, 3, 4, 5]
    const collection_2 = [1, 4, 5, 3]
    const collection_3 = [3, 2, 6, 5]
    expect(mergeArray(collection_1, collection_2, collection_3)).toEqual(
      mergeArrayTest(collection_1, collection_2, collection_3)
    )
  })
})
