// 排列组合

var result = []

function plzh(zuhe,rest){
  let length = rest.length
  if(length === 1){
     zuhe += rest;
     result.push(zuhe)
     console.log(zuhe)
  }else{
    for(var i = 0;i< length;i++){
      var zuhe2 = zuhe + rest.charAt(i)
      var rest2 = rest.substring(0, i) + rest.substring(i + 1);
      plzh(zuhe2,rest2)
    }
  }
}

plzh("","abc")
console.log(result)