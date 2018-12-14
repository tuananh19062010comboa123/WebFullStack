'use strict'

function search(input, target) {
  for (var i =0 ; i<input.length;i++){
      if(input[i] == target ){
        return i;
    } 
  } 
  return -1;
}

function sort(input) {
  for(var i = 0;i<input.length;i++){
    for(var j = i+1;j<input.length;j++){
        if(input[j] < input[i]){
          var arrange = input[i];
          input[i] = input[j];
          input[j] = arrange
        }
    }
  }
  return input;
}
var testLengthArray = [-12, -6795, 10000, 7896, -2462,  0, 506];
function generate(testLengthArray){
  var arrayJson = [];
  var target = 420;
  sort(testLengthArray);
  search(testLengthArray,target);
  var output = search(testLengthArray,target);

  var  arrJson = {};
  arrJson["input"] = testLengthArray;
  arrJson["target"] = target;
  arrJson["output"] = output;
  var myJsonString = JSON.stringify(arrJson);
  console.log(myJsonString);
  arrayJson.push(myJsonString);
  return arrayJson;
}
module.exports = generate
