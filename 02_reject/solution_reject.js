/*
function reject(arr, func){
	var result = [];
	arr.forEach(function(item){
		if (!func(item)){
			result.push(item);
		}
	});

	return result;
}

<<<<<<< HEAD
*/
//using filter
function reject(arr, func){
	var result = arr.filter(function(item) {
			if (!func(item)){
				return item;
			}

		});
	return result;
}
=======
/*
Excellent job.

Can you solve this using .filter? 

*/
>>>>>>> 3131cd5b2790bffa59468ebdb8d2677068e43ed4
