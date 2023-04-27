/*
    Check if the paranthesis are valid
*/
function isValid(s){
    let leftBrackets = [];
    
    for( let i = 0; i < s.length; i++){
        if(s[i] == '[' || s[i] == '{' || s[i] == '('){
            leftBrackets.push(s[i]);
        } else if (s[i] === ']' && leftBrackets.length && leftBrackets[leftBrackets.length-1] == '['){
            leftBrackets.pop();
        } else if (s[i] === '}' && leftBrackets.length &&  leftBrackets[leftBrackets.length-1] == '{'){
            leftBrackets.pop();
        } else if (s[i] === ')' && leftBrackets.length && leftBrackets[leftBrackets.length-1] == '('){
            leftBrackets.pop();
        } ;
    }
    return leftBrackets.length ? false : true;
}

isValid('[{()}]');