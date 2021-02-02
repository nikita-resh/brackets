module.exports = function check(str, bracketsConfig) {  let open = "";
  let close = "";
  for (let i = 0; i < bracketsConfig.length; i++) {
    open += String(bracketsConfig[i][0]);
    close += String(bracketsConfig[i][1]);
  }
  str = str.split("");
  let n = 0;
  // if (open.indexOf("(") == close.indexOf("]"))
  while (str.length != 0) {
    for (let k = 0; k < str.length; k++) {
      if (open.includes(str[k])) {
        if (open.indexOf(str[k]) == close.indexOf(str[k + 1])) {
          str.splice(k, 2);
        }
      }
    }
    n++;
    if (n > 30) {
      return false;
    }
  }
  return true;
}
