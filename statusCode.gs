/**
 * Returns the status code of the page.
 *
 * @param {String} The url which is to be checked.
 * @return {Number} returns the status code of the page.
 * @customfunction
 */
function STATUSCODE(URL){
   var response = UrlFetchApp.fetch(URL);
   return response.getResponseCode();
}
