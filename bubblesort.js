

let comps = 0;

function swap (arr, j) {
  let firstElem = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = firstElem;
}

function bubbleSort (arr) {
comps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      comps++;
      if (j === arr.length -1) {
        j = arr.length;
      }
      else if (arr[j] > arr[j + 1]) {
        swap(arr, j);

      }
    }
  }
  console.log('comparisons', comps)
  return arr;
}
