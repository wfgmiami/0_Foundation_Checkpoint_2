/* Original - not passing all possible cases
function recSmallestInt(arr){
	var min = 0;

	if (arr.length){
		if(arr[0] < recSmallestInt(arr.slice(1))){
			min = arr[0];
		}
		return min;
	}
	return min;
	
}


//Refactored - submitted after time was up
function recSmallestInt(arr){
		var min = 0;

		if (arr.length){
			min = recSmallestInt(arr.slice(1))
			if(arr[0] < min){
				min = arr[0];
				return min;
			}else{
				return min;
			}
			
		}else{
			return min;
		}
	
}
*/

//third time's the charm
//problem with the 1st solution is that it will not work if all numbers < 0 
//problem with the 2nd solution is that it will not work if all numbers > 0

function recSmallestInt(arr){

	if(arr.slice(1).length > 0){
		var min = arr[0];
		var next = recSmallestInt(arr.slice(1));
		if (next < min){
			min = next;
		}
	}else{
		return arr[0];
	}
	return min;		
}

/*

Nice job persevering and figuring this out.

Because recursive functions can be complex to reason through and read, keep all computation and recursive logic in one place - outside the base case:

function recSmallestInt(arr){

	if(arr.slice(1).length > 0){
		var min = arr[0];
		var next = recSmallestInt(arr.slice(1));
		if (next < min){
			min = next;
		}
		return min;
	}else{
		return arr[0];
	}		
}


*/

