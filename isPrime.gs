/**
 * Checks whether a number is prime or not. Returns True if prime else False.
 *
 * @param {Number} The number which is to be checked.
 * @return {boolean} True if number is prime else False.
 * @customfunction
 */
function ISPRIME(num) {
  if (typeof num != 'number') {
    return null;
  }
  if(num == 1) return false;
  if(num == 2 || num == 3) return true;
  for(var i = 2; i<=Math.sqrt(num); i++){
      if(num % i == 0){
        return false;
      }
    }
    return true;
}