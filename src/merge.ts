function isSorted(collection: number[], asc: boolean) {
  const arr = [...collection]
  const n = arr.length
  if (n === 0 || n === 1) {
    return true
  }
  for (let i = 0; i < n; i++) {
    if (asc && arr[i - 1] > arr[i]) {
      return false
    }
    if (!asc && arr[i - 1] < arr[i]) {
      return false
    }
  }

  return true
}

function mergeArray(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] | string {
  // not sorted
  if (
    !isSorted(collection_1, true) ||
    !isSorted(collection_2, true) ||
    !isSorted(collection_3, false)
  ) {
    return 'invalid array value'
  }

  // merge collection_1 & collection_2
  let i = 0,
    j = 0,
    k = 0
  const n1 = collection_1.length
  const n2 = collection_2.length
  const mergeArrayAsc: number[] = []
  while (i < n1 && j < n2) {
    if (collection_1[i] < collection_2[j]) {
      mergeArrayAsc[k++] = collection_1[i++]
    } else {
      mergeArrayAsc[k++] = collection_2[j++]
    }
  }
  // remaining collection_1
  while (i < n1) {
    mergeArrayAsc[k++] = collection_1[i++]
  }
  // remaining collection_2
  while (j < n2) {
    mergeArrayAsc[k++] = collection_2[j++]
  }

  // merge mergeArrayAsc & collection_3
  let a = 0,
    b = collection_3.length - 1,
    c = 0
  const n = mergeArrayAsc.length
  const result: number[] = []

  while (a < n && b > -1) {
    if (mergeArrayAsc[a] < collection_3[b]) {
      result[c++] = mergeArrayAsc[a++]
    } else {
      result[c++] = collection_3[b--]
    }
  }
  while (a < n) {
    result[c++] = mergeArrayAsc[a++]
  }
  while (b > -1) {
    result[c++] = collection_3[b--]
  }
  return result
}

module.exports = { mergeArray, isSorted }
