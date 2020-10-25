// 能力动态增强
let plane = {
  fire: () => {
    console.log("plane fire")
  }
}
let planeFire = plane.fire
plane.fire = () =>{
  planeFire()
  console.log("missile fire")
}

let missileFire = plane.fire

plane.fire = () =>{
  missileFire()
  console.log("atom fire")
}

plane.fire()
//plane fire
// missile fire
// atom fire
