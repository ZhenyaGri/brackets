module.exports = function check(str, bracketsConfig) {
  let lastI = [];
  for (let i = 0; i < str.length; i++){
    for (bracket of bracketsConfig){
      if (str[i] == bracket[0] && str[i+1] == bracket[1]){
        str = str.slice(0, i) + str.slice(i+2);
        i -= 2;
        break;
      }
    }
  }
  if (str.length == 0){
    return true;
  } else {
    return false;
  }
}
