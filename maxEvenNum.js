/*
    Given a string S that that represents a number, it can have 0 or more 
    substrings that has the maximum even number. If no match is found 
    return the empty string.
    Example:
    Input: s= "63";
    Output: "6";
    Explanation:
        The only non-empty substrings are the "6" and "3", "63". "6"
        is the only even number.
*/

function findMaxEvenSubs(s) {
    let maxEvenSub = '';
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j <s.length; j++ ){
            let substring = s.substring(i,j);
            if(substring % 2 == 0 && substring.length > 0 && substring >= maxEvenSub ) {
                maxEvenSub = substring;
            }
        }
    }
    return maxEvenSub;

}
console.log(findMaxEvenSubs('83'));
