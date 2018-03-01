

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('should sort in order', function(){
    expect( bubbleSort([2,1,3]) ).toEqual( [1,2,3] );
  });
});

describe('Bubble Sort', function(){
  it('handles negative numbers and duplicates', function(){
    expect( bubbleSort([29, 57, 4, -5, 10, 4, 17]) ).toEqual( [-5, 4, 4, 10, 17, 29, 57] );
  });
});

describe('Bubble Sort', function(){
  it('handles reverse order', function(){
    spyOn(window, 'swap').and.callThrough();
    expect( bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
    expect(comps).toEqual(100);
    expect(swap.calls.count()).toEqual(45);
  });
});
