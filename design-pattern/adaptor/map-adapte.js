let googleMap = {
  show: () => {
	console.log("google map show.")
  }
}
let baiDuMap = {
  display:()=>{
    console.log("baiDu map show")
  }
}
let googleMapAdaptor = {
  display:()=>{
    googleMap.show()
  }
}
function render(map) {
  if(typeof map.display === 'function' ){
    map.display()
  }else{
    throw Error("bad api of map")
  }
}

render(baiDuMap)
render(googleMapAdaptor)
