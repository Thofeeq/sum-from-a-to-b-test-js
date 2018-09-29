
function sum(fromN, toN) {
  if(toN > fromN){
    return toN + sum(fromN, toN - 1);
  }else {
    return fromN;
  }

}

module.exports = sum;