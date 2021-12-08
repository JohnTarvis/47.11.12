/*
pivot accepts an array, starting i, and ending i
You can assume the pivot is always the first element
*/

function pivot(arr, left, right) {
    const pivot = arr[Math.floor((right + left) / 2)]
    let i = left; 
    let j = right; 
    while (i <= j) { 
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    return i;
}

/*
quickSort accepts an array, left i, and right i
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    let i;
    if (arr.length > 1) {
        i = pivot(arr, left, right);
        if (left < i - 1) {
        quickSort(arr, left, i - 1);
        }
        if (i < right) {
        quickSort(arr, i, right);
        }
    }
    return arr;
}

module.exports = quickSort;






