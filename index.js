function evalRPN(tokens){
  var tempArray = [];
  for (var i = 0; i < tokens.length; i++){
    if(tokens[i] === "+"){
    tempArray.push(tempArray.pop() + tempArray.pop());
    continue;
    } else if(tokens[i] === "-"){
    tempArray.push(tempArray.pop() - tempArray.pop());
    continue;
    } else if (tokens[i] === "*"){
    tempArray.push(tempArray.pop() * tempArray.pop());
    continue;
    } else if (tokens[i] === "/"){
    var first = tempArray.pop();
    var second = tempArray.pop();
    var divided = second / first;
    tempArray.push(Math.floor(divided));
    continue;
    } else {
    tempArray.push(Number(tokens[i]));
    }
  }
  return tempArray;
}


// var testArray = ["4","13","5","/","+"];
// console.log(evalRPN(testArray));
