# 1.Two Sum (Easy)
-------------------

>####Description
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
>#####Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

### Mine(Original code)
``` javascript
var twoSum=function(nums,target){
  for (let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[j] + nums[i] === target){
	    return [i,j];
      }
    }
  }
};
```
### analysis
耗时500ms以上，时间复杂度为O(n2)，空间复杂度为O(1)。可以使用哈希表，js里面建立一个对象，将每个元素的值及索引添加到对象中，先检查target-nums[i]是否存在，再向对象中添加元素，即可避免自身相加等于target的情况出现。本题说明中提到只存在一种解法，故搜索到一种解法即可返回。修改后的时间复杂度为O(n)，空间复杂度为O(n)，运行时间为89ms。
### Mine(Modified code)
``` javascript
var twoSum = function(nums,target){
  let map = {};
  for (let i =0;i <nums.length;i++){
    let complement = target - nums[i];
    if(map[complement] !== undefined){
      return [map[complement],i];
    }
    map[nums[i]] = i;
  }
  return '没有解决方案';
};
```
# 2.Reverse Integer (Easy)
-------------------

>####Description
  Reverse digits of an integer.
  Example1: x = 123, return 321
  Example2: x = -123, return -321

### Mine(Original code)
``` javascript
var reverse = function(x){
    let r = 0,
        infinity = 2147483648;
    while (x) {
        r = r * 10 + x % 10;
        if(x > 0){
          x = Math.floor(x / 10);
        }
        else{
          x = Math.ceil(x / 10);
        }
    }
    return (r < -infinity || r > infinity + 1) ? 0 : r;
}
```
### analysis
能正确运行得到答案，但是速度再200ms以上，较慢，参考别人提交的代码，进行了修改，直接对数字进行运算，不转化城字符串，可大大提高运算效率。修改后的代码运行时间为132ms。

-------------------

### Mine(Modified code)
``` javascript
var reverse = function(x){
    let r = 0,
        infinity = 2147483648;
    while (x) {
        r = r * 10 + x % 10;
        if(x > 0){
          x = Math.floor(x / 10);
        }
        else{
          x = Math.ceil(x / 10);
        }
    }
    return (r < -infinity || r > infinity + 1) ? 0 : r;
}
```
# 3.Palindrome Number (Easy)
-------------------

>####Description
>Determine whether an integer is a palindrome. Do this without extra space.
click to show spoilers.
Some hints:
Could negative integers be palindromes? (ie, -1)
If you are thinking of converting the integer to string, note the restriction of using extra space.
You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
There is a more generic way of solving this problem.
Subscribe to see which companies asked this question.

### Mine(Original code)
``` javascript
var reverse = function(x){
    let r = 0,
        infinity = 2147483648;
    while (x) {
        r = r * 10 + x % 10;
        if(x > 0){
          x = Math.floor(x / 10);
        }
        else{
          x = Math.ceil(x / 10);
        }
    }
    return (r < -infinity || r > infinity + 1) ? 0 : r;
}
var isPalindrome = function(x) {
    let h = reverse(x);
    return (h === x && x >= 0) ? true : false;
};
```
### analysis
借用上一个问题的解决方案，耗时366ms，但是针对本问题可以更加精简，比如负数并不是回文，并不需要对小于零的数进行判断，可以通过做reverse的时候，将reverse的一半和剩余的一半进行比较是否两者相同，不过进行比较是，要注意奇偶位数不同判断条件不同的情况，和整十数在进行reverse时，即多个0开头时0不能保存的情况。修改后，299ms。

-------------------

### Mine(Modified code)
``` javascript
var isPalindrome = function (x){
    if (x < 0 || (x!=0 && x%10==0)) return false;
    let rev = 0;
    while (x > rev){
        rev = rev * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return (x === rev || x === Math.floor(rev / 10));
}
```
# 4.Roman to Integer (Easy)
-------------------

>####Description
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.
Subscribe to see which companies asked this question.
### Mine(Original code)
``` javascript
var romanToInt = function(s) {
    let roman = ['I','V','X','L','C','D','M'],
        num = [1,5,10,50,100,500,1000],
        oRoman = s.split(''),
        add = 0,
        flag = 0,
        indexNum = function (x){
            return num[roman.indexOf(oRoman[x])];
        }
    for (let i = 0;i < oRoman.length;i++){
      if (indexNum(i) < indexNum(i+1) && oRoman.length > 1){
        num[roman.indexOf(oRoman[i])] = -indexNum(i); 
        flag = 1;
      }
      add += indexNum(i);
      if (flag === 1){
        num[roman.indexOf(oRoman[i])] = -indexNum(i);
        flag = 0;
      }
    }
    return add;
};
```
### analysis
两个表可以写成一个对象，不用更改num表中的值，将上一次的存下来，和本次对比，加或减即可。
### Mine(Modified code)
``` javascript
var romanToInt = function(s) {
    let map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
        oRoman = s.split(''),
        preInt = map[oRoman[0]],
        curInt = 0,
        add = 0;
    for (let i = 0;i < oRoman.length;i++){
      curInt = map[oRoman[i+1]];
      if(preInt < curInt){
        add -= preInt;
      }
      else{
        add += preInt;
      }
      preInt = curInt;
    }
  return add;
};
```
# 5.Longest Common Prefix (Easy)
-------------------

>####Description
Write a function to find the longest common prefix string amongst an array of strings.
Subscribe to see which companies asked this question.

### Mine(Original code)
``` javascript
var longestCommonPrefix = function(strs) {
    let first = strs.shift();
    if(first == undefined) return '';
    for (let i = 0;i < first.length;i++){
      for(let j = 0;j<strs.length;j++){
        let num = strs[j].indexOf(first.substr(0,i+1));
        if(num !== 0){
          return first.substr(0,i);
        }
      }
    }
  return first;
};
```
### analysis
耗时122ms，属于横向比较，时间复杂度： O（S），其中S是所有字符串中所有字符的总和。在最坏的情况下，比较S次。可以使用纵向比较，纵向比较各字符串对应字符，如果某字符串的长度等于已比较的字符的个数 或者 某字符串该位置的字符和比较字符不同，就返回之前比较的所有字符，耗时115ms，其时间复杂度： O（S），其中S是所有字符串中所有字符的总和。在最坏的情况下会有n等长字符串m并且算法执行 S = m * n字符比较。即使最坏的情况仍然与方法＃1相同，在最好的情况下最多n * minLen比较其中m i n L e n是数组中最短字符串的长度。
两种方式的空间复杂性均为 O（1）。我们只使用常量额外的空间。

### Mine(Modified code)
``` javascript
var longestCommonPrefix = function(strs) {
    let first = strs[0];
    if(first == null || first === '') return '';
    for(let i = 0;i < first.length;i++){
      let c = first.charAt(i);
      for(let j = 1;j < strs.length;j++){
        if(strs[j].length === i || strs[j].charAt(i) !== c){
          return first.substring(0,i);
        }
      }
    }
    return first;
};
```
