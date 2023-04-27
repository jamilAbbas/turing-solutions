/*
    Find the duplicate number and replace it with the actual number in sequence.
    e.g [1,2,3,3] becomes [1,2,3,4]
*/

function findNum(arr){
    let result = [];
    for(var i=0; i < arr.length-1; i++){
        for(var j=i+1; j< arr.length; j++){
            if(arr[i]==arr[j]){
            result.push(arr[i]);
            result.push(arr[arr.length-2] + 1);
            }
        }
    }
    return result;
}
console.log(findNum([1,2,3,4,5,5]));
