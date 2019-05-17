## Collection of useful algorithms written in JavaScript

### List of scripts:

All scripts available for `yarn run` or `node` commands.

| name                 | path                          | yarn_script_name       |
|:--------------------:|:-----------------------------:|:----------------------:|
| **sorting**                                                                   |
| bubble sort          | sorting/bubblesort.js         | bubblesort.js          |
| selection sort       | sorting/selectionsort.js      | selectionsort.js       |
| insertion sort       | sorting/insertionsort.js      | insertionsort.js       |
| cycle sort           | sorting/cyclesort.js          | cyclesort.js           |
| cocktail sort        | sorting/cocktailsort.js       | cocktailsort.js        |
| comb sort            | sorting/combsort.js           | combsort.js            |
| gnome sort           | sorting/gnomesort.js          | gnomesort.js           |
| oddeven sort         | sorting/oddevensort.js        | oddevensort.js         |
| shellsort            | sorting/shellsort.js          | shellsort.js           |
| merge sort           | sorting/mergesort.js          | mergesort.js           |
| quick sort           | sorting/quicksort.js          | quicksort.js           |
| heap sort            | sorting/heapsort.js           | heapsort.js            |
| radix sort           | sorting/radixsort.js          | radixsort.js           |
| **search**                                                                    |
| binary search        | search/binarysearch.js        | binarysearch.js        |
| interpolation search | search/interpolationsearch.js | interpolationsearch.js |
| jump search          | search/jumpsearch.js          | jumpsearch.js          |
| linear search        | search/linearsearch.js        | linearsearch.js        |
| **data structures**                                                           |
| stack                | data structures/stack.js      | stack.js               |
| heap                 | data structures/heap.js       | heap.js                |
| queue                | data structures/queue.js      | queue.js               |
| **algorithms**                                                                |
| euclid gcd iter/rec  | algorithms/gcd_euclid.js      | gcd_euclid.js          |
| euclid gcd extended  | algorithms/gcd_extended.js    | gcd_extended.js        |

### How to use:
```bash
yarn install
yarn run [yarn_script_name]
# or
node start.js [path]
```

Do NOT use `./` for example: `node start.js ./[...]` it won't work.