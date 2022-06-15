function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split('').reverse().join('')
  if(reverseWord === word){
  return true
  }
  else{
  return false
  }
}

/* 
  //function takes in a string 
  //take string and reverse it, set it to new variable 
  //compare original string and reverse string, if both are equal return true, else return false
*/

/*
  takes a string, uses the .split() method to split each character into a seperate element of an array, we then 
  use the .reverse() method over the array to flip the elements so that index[0] is now the last element, the we
  use the .join() method to reconnect the string into a new string that is the reversed version of the original 
  string. We us an if/else statement to check if the original string and new string are strictly equal, then 
  it will return true, else it will return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
