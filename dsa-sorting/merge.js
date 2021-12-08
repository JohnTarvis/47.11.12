function merge(arr1, arr2) {
    let back = []; 
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        back.push(arr1.shift());
      } else {
        back.push(arr2.shift());
      }
    }
    return [...back, ...arr1, ...arr2];
}
  
function mergeSort(arr) {
    const split = arr.length / 2;
      if (arr.length <= 1) {
      return arr;
    }
    const arr1 = arr.splice(0, split); 
    const arr2 = arr;
    return merge(mergeSort(arr1), mergeSort(arr2));
}  

module.exports = { merge, mergeSort};








