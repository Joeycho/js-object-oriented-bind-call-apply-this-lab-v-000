function justInvoke(fn){
    const value = fn()
  return value
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue,arg)
}
