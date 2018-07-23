/**
 * binary search (mostly for arrays)
 * Worst-case performance: O(log n)
 * Best-case performance: O(1)
 * Average performance: O(log n)
 */

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    const mid = (high - low >> 1) + low;

    if (arr[mid] === item) return mid;
    arr[mid] > item ? high = mid - 1 : low = mid + 1;
  }
  return null;
}