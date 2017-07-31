function threeTimes(func){
	var cnt = 0;
	var invoke = function(){
		if (cnt < 3){
			++cnt;
			return func();
		}		
	}
	return invoke
}

/*
Good work. Don't forget semicolon after return invoke;

*/
