// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let str1='';
  let str2='';
 for(let i=0;i<array1.length;i++){
str1+=array1[i]
} 
   for(let i=0;i<array2.length;i++){
str2+=array2[i];
} 
  let result=Number(str1)+Number(str2);
  return result;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str= String(value);
  let i=0;
  let j=str.length-1;
  while(i<j){
    if(str[i]!=str[j]){
      return false;
    }i++;j--
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input=='' || input==undefined){
    return 'Required field';
  }else if(Number.isNaN(Number(input))|| input==0){
    return 'Must be a number besides 0';
  }else{
    return "";
  }
}
