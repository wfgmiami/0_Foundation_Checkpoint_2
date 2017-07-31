/*
function callAll(obj, arr){
	var result = [];

	for (var i = 0; i < arr.length; i++){

		result.push(arr[i].call(obj));

	}
	return result;
}
*/

//Nice job. Can you solve this using .map? See official solution

function callAll(obj, arr){

	var result = arr.map(function(func){
		return func.call(obj);
	})
	return result;
}