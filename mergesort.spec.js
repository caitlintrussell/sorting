

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1, 2, 3, 4]) ).toEqual( [[1, 2], [3, 4]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([2], [1])).toEqual([1, 2]);
  });
});

describe('Merge Sort function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
