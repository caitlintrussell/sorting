

function split (arr) {
  let halfPoint = Math.floor(arr.length / 2);
  return [arr.slice(0, halfPoint), arr.slice(halfPoint)];
}

function merge (arr1, arr2) {
  let resultArr = [];
  let i=0;
  let j=0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    }
    else {
      resultArr.push(arr2[j]);
      j++;
    }
    if (i === arr1.length) resultArr = resultArr.concat(arr2.slice(j));
    if (j === arr2.length) resultArr = resultArr.concat(arr1.slice(i));
  }
  return resultArr;
}

function mergeSort (arr) {
  // REMEMBER VARIABLES ARE NOT YOUR FRIEND IN RECURSION
  // we will need to use our split function until we have single index arrays
  // then we will call merge on each index
  // then we will call mergeSort on itself until the ending array length equals the starting ?? (it has to be a single array)
  let splitArr = split(arr);
  let arrA = splitArr[0];
  let arrB = splitArr[1];

  // if (arrA.length > 1)

  console.log('arr A: ', arrA)
  console.log('arr B: ', arrB)
  console.log(splitArr);
  console.log(merge(arrA, arrB));
  return merge(arrA, arrB);
}
