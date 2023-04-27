/*
    Order colors e.g 'gold2 black3 white1' should become 'white gold black'
*/
function orderColors(s){
    let stringArr = s.split(" ");
    let orderedArr = [];
    let str = '';
    for(let i = 0; i <  stringArr.length; i++){
        let item = stringArr[i];
       let item_pos= parseInt(item.slice(-1));
       const [word, pos] = item.split(item_pos)
       orderedArr[item_pos-1] = word;
    }
    for(let j =0; j< orderedArr.length; j++){
        str = str + " "+ orderedArr[j];
    }
  return str;
}


orderColors('gold2 black3 white1')