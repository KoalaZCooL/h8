function MeanMode(arr){
  let mean = arr.reduce((acc, curr) => acc + curr) / arr.length
  let pops = {}

  arr.forEach(v => {
    if(pops[v]){
      pops[v] += 1
    }else{
      pops[v] = 1
    }
  });

  let mode
  for (const key in pops) {
    if(!mode || pops[key] > mode){
      mode = pops[key]
    }
  }
  return mean==mode
}

console.log(MeanMode([5,3,3,3,1]))