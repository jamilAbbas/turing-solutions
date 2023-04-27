/*
    Find the highest repeaded letter in a string
*/
function calc(s){
    let highestChar = null;
    let highestCount = 0;
  for(let i = 0; i < s.length; i++) {
      let char = s[i];
      if(!(/[a-zA-Z]/.test(char))) continue;
          let numOfOc =0;
      for(j=i; j <s.length; j++){
          if (char == s[j]) numOfOc++;
          if(numOfOc > highestCount) {
              highestChar = char;
              highestCount = numOfOc;
          }
          
      }
  }
  return highestChar;
}
// Call the function
calc('aaabasdDdDD123123cc');
