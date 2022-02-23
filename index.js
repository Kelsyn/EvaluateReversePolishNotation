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
      if(divided > 0){
        tempArray.push(Math.floor(divided));
      } else{
        tempArray.push(Math.ceil(divided));
      }
      continue;
    } else {
    tempArray.push(Number(tokens[i]));
    }
  }
  return tempArray;
}
