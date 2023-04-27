/*
    Largest Number in Array
    Given an integer n, follow the next rules to fill in a new array
    result:
    -> result array is of size n+1 
    -> result[0] = 0;
    -> result[1] = 1;
    -> result[2 * i] = result[i] when 2 <= 2 * i <= num;
    -> result[2 * i + 1] = result[i] + result[i + 1] when 2 <= 2 * i + 1 <= num;
*/
function findLargest(n) {
    result = [0,1];
    
    for(let i = 0; i < n+1; i++){
        if( (2 * i) >= 2 && (2 * i) <= n  ) {
            result[2*i] = result[i];
        }
        if( (2 * i + 1) >= 2 && (2 * i +1) <= n  ) {
            result[2 * i+1] = result[i] + result[i+1];
        }
    }
    let largest = 0;

for ( k = 0; k < result.length; k++ ){
    if ( result[k] > largest ) {
        largest=result[k];
    }
}
return largest;
}

console.log(findLargest(7));