function bubbleSort(arr) {
    for(let count1 = 0; count1 < arr.length; count1++){
        for(let count2 = 0; count2 < arr.length; count2++){
            if(arr[count1] > arr[count1 + 1]){
                const temp = arr[count1];
                arr[count1] = arr[count2];
                arr[count2] = temp;
            }
        }
    }
}

module.exports = bubbleSort;
