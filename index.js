/**
 * Counts the frequency of elements in an array.
 * 
 * @param {Array} arr - The array containing elements to be counted.
 * @returns {Object} - An object where keys represent unique elements from the input array 
 * and values represent the frequency of each element.
 */

function countFrequency(arr){
    const item = {}

    arr.forEach((elem) => {
        if(item.hasOwnProperty(elem)){
            item[elem] += 1;
        }
        else{
            item[elem] = 1;
        }
    })
    return item;
}

// console.log(countFrequency([2,5,7,2,6,8,9,7,2]));
// Output { '2': 3, '5': 1, '6': 1, '7': 2, '8': 1, '9': 1 }

module.exports = {countFrequency}