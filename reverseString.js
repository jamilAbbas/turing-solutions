/*
    Reverse string keep the special characters position at same position.
    e.g "ab#c" becomes "c#ba"
*/

function reverse(s) {
    let onlyChars = [];
    let reversedArrayOfChar = [];
    for(let i = 0; i < s.length; i++){
        if(/[a-zA-Z]/.test(s[i])){
            onlyChars.push(s[i]);
        }
    }
    // reverse char Array
    reversedArrayOfChar = onlyChars.reverse();
   // reverse the string keeping the special characters at same position
   let revStr="";
   for(j = 0; j <s.length-1; j++){
         if(/[a-zA-Z]/.test(s[j])){
             revStr += reversedArrayOfChar[j];
        } else {
            revStr += s[j];
            revStr += reversedArrayOfChar[j];
        }
   }
}

reverse('A?SDA');
