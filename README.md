# Count Frequency Function

This function counts the frequency of elements in an array.

## Installation
```bash
npm i count-frequency
```

## Usage
```bash
"const { countFrequency } = require('count-frequency');"

"console.log(countFrequency([2, 5, 7, 2, 6, 8, 9, 7, 2]));"
// Output: { '2': 3, '5': 1, '7': 2, '6': 1, '8': 1, '9': 1 }
```

## Parameters
* arr: The array containing elements to be counted.

## Return Value
An object where keys represent unique elements from the input array and values represent the frequency of each element.

## Example
```bash
console.log(countFrequency(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));

// Output: { 'apple': 3, 'banana': 2, 'orange': 1 }
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.