function MP(num){
  if(num>9){
    let s = (num+'')
    let n = 0
    for (let i = 0; i < s.length; i++) {
      if(n){
        n*=s[i]
      }else{
        n = s[i]
      }
    }
    return MP(n)
  }
  return num
}

console.log(MP(39))
console.log(MP(123))
console.log(MP(4321))