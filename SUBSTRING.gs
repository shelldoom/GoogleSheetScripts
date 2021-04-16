/**
 * Returns the required substring.
 *
 * @param {String} string from which the substring is to be extracted.
 * @param {Number} substring start index.
 * @param {Number} substring end index.
 * @return {String} returns the substring from start index to end index - 1.
 * @customfunction
 */
 
function SUBSTRING(str, start, end){
  return str.substring(start, end - 1);
}