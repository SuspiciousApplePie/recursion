export function mergeSort(numberSet) {
  let sorted = [];
  if (numberSet.length <= 1) {
    return numberSet;
  }
  const [left, right] = [
    mergeSort(numberSet.slice(0, numberSet.length / 2)),
    mergeSort(numberSet.slice(numberSet.length / 2)),
  ];
  let leftCounter = 0;
  let rightCounter = 0;

  while (sorted.length < numberSet.length) {
    if (
      left[leftCounter] <= right[rightCounter] ||
      right[rightCounter] === undefined
    ) {
      sorted.push(left[leftCounter]);
      leftCounter++;
    } else if (
      right[rightCounter] <= left[leftCounter] ||
      left[leftCounter] === undefined
    ) {
      sorted.push(right[rightCounter]);
      rightCounter++;
    }
  }

  return sorted;
}
