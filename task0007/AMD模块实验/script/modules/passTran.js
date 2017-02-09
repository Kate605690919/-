define (function (){
	var pT = function (str) {
		var regex=/^[0-9a-zA-Z]*$/g ;
		str = str.replace(/-/g,'');
		console.log(str);
		str = str.toUpperCase();
		console.log(str);
		if (str.length !== 20 || !(regex.test(str))){
			str = '异常：无效的密码格式';
		}
		return str;
	};
	return {
		pT: pT
	};
});
//问题：结果不只要判断位数，还要只能是数字字母，还要加一个判断
//input[type=password]不能输入中文，但是还是判断一下不能是除-之外的其他符号