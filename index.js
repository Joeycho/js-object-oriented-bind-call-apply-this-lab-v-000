function justInvoke(fn){
  //  const value = fn()
//  return value
  return fn
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue,arg)
}
