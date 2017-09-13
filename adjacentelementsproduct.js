//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//use the reduce function to return a list of pairs of items in the input array. Then use Math.max to return the largest product in the array that was returned.

function adjacentElementsProduct(inputArray) {
    return inputArray.reduce(function(acc, int, index, inputArray) {
        if(inputArray.length > index + 1) {
            return [
                ...acc,
                int * inputArray[index + 1]
            ];
        } else {
            return acc;
        }
    }, []).reduce(function(accu, currentValue) {
        return Math.max(accu, currentValue);
    });
}
