function SecondGreatLow(arr)
{
  arr.sort((a, b) => {return a - b;})

  let tmpArr = arr.filter( (val, idx, ar) => {
    if(idx){
      return val > ar[idx-1]
    }
    return val
  })

  let retArr = []
  switch (tmpArr.length) {
    case 1:
    case 2:
      retArr = tmpArr
      break;
      
    case 3:
      retArr = tmpArr.slice(1, -1)
      break;
  
    default:
      retArr = [tmpArr.slice(1).shift(),tmpArr.slice(-2, -1).pop()]
      break;
  }
  return retArr
}

console.log(SecondGreatLow([1]))
console.log(SecondGreatLow([2,1]))
console.log(SecondGreatLow([1,2,1]))
console.log(SecondGreatLow([3,2,1]))
console.log(SecondGreatLow([7,12,98,7,106]))