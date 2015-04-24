/*
  找到从0到n这些数字当中，1出现的次数。
  例如：0-13，含有1的为1、10、11、12、13.总共为6次。
*/
function power10(n) {
    var i = 1;
    for(var j = 0;j < n; j++){
    	i *= 10;
    }
    return i;
};
function get(k ){
	var len = k.length;
	var first = k[0];
	if(len == 1 && first ==0) return 0;
	if(len == 1 && first > 0) return 1;
    var numFirst = 0;
    if (first > 1) {
    	numFirst = power10(len-1);
    } else if(first == 1){
    	numFirst = 1 + Number(k.slice(1));
    }
    var other = first * (len - 1) * power10(len - 2);
    var left = get(k.slice(1));

    return numFirst + other + left;
};
get("99");
