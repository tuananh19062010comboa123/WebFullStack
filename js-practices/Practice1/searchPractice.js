'use strict'
//var input = [-12, -6795, 10000, 7896, -2462,  0, 506]
function search(input, target) {
  for (var i =0 ; i<input.length;i++){
      if(input[i] == target ){
     //console.log("vi tri cua gia tri "+target+" trong mang la :" + i);
        return i;
    } 
  } 
  //console.log("gia tri "+target+" ko co trong mang !!");
  return -1;
}
module.exports = search
