# Node-Assignment-4

## Objective

Create and publish a simple utility package to NPM that offers array manipulation functions. This package should demonstrate your understanding of setting up a package for NPM, including writing a useful README, choosing an appropriate license, understanding semantic versioning, and utilizing .npmignore.

## Array Manipulation NPM Package

This package is a simple utility package for JavaScript arrays, providing functions for merging arrays and removing duplicates.

### Installation

You can install <a href="https://www.npmjs.com/package/array-manipulation-ln">Array Manipulation</a> via NPM. Run the following command in your terminal:

```
npm install array-manipulation-ln
```

### Usage

#### Merge Arrays

The mergeArrays function takes two arrays as input and returns a new array containing the elements of both arrays.

```js
const {mergeArrays} = require('array-manipulation-ln');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray): // Output: [1, 2, 3, 4, 5, 6]
```

#### Remove Duplicates

The removeDuplicates function removes duplicate elements from an array while preserving the order.

```js
const { removeDuplicates } = require("array-manipulation-ln");

const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = removeDuplicates(arr);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
```

### Contributing

Contributions are welcome! If you have suggestions for new features, bug fixes, or improvements, please open an issue or submit a pull request.

### License

Array Manipulation is licensed under the MIT License.
