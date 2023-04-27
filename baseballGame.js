/*
    if the current element of the ops array is:
        D: multiply * 2
        C: Invalidate the last element of the ops array
        +: add the last two elements of the ops array
        0-9: add to records
*/
function calc(ops){
    let record = [];
    let sum = 0;
    for(let i=0; i<ops.length;i++){
        let currItem = parseInt(ops[i]);
       
        if(isNaN(currItem)){
            if(ops[i]=='C'){
                record.pop();
            } else if(ops[i]=='D'){
                let dub = 2 * record[0];
                record.push(dub);
            } else if(ops[i] === '+') {
                let addPrevTwo = record[0] + record [1];
                record.push(addPrevTwo);
            }
        } else if(typeof currItem === 'number'){
            record.push(currItem);
        }
    }
    if(record.length){
     for(let j=0;j<record.length;j++){
         sum = sum + record[j];
     }
    }
    return sum;
}

const res = calc(["5","2","C","D","+"]);
console.log("R E S U L T :: ", res);
