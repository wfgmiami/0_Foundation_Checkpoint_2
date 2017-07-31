
describe("using the Array.prototype.reduce function", function() {

  it("Use reduce to find the sum of the array, with a starting value of 100", function() {

    var callReduceOnThisArray = [1,2,3,4,5];
    spyOn(Array.prototype, 'reduce').and.callThrough();


    // ***** SOLUTION HERE *****
    //var sum = ...
    //your code here!! use the Array method 'reduce' to find the sum of the above array
    var sum = 100;
    sum += callReduceOnThisArray.reduce(function(sum, item) {return sum +item});
    
    /*
    You're using reduce correctly, but you also should have passed in 100 as the optional start parameter:
    
    var sum = callReduceOnThisArray.reduce(function(prev, current){
    	return prev+current;
    }, 100);
    
    See the official specs for reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    
    */

    expect(sum).toEqual(115);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

});
