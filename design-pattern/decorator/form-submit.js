let form = {
  userName: '',
  age: ''
}
Function.prototype.before = function (beforeFunc) {
  let _self = this
  return function () {
	let pass = beforeFunc.apply(this, arguments)
	if (!pass) return
	_self.apply(this, arguments)
  }
}

function validator({param}) {
  let {userName, age} = param
  if (!userName) {
	console.log('bad userName')
	return false
  }
  if (!age) {
	console.log("bad age")
	return false
  }
  return true
}

function curl({url, param}) {
  return new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("done...")
	}, 0)
  })
}


function submit({param}) {
  let promise = curl({url: 'ab.com', param})
  promise.then(reps=>{
    console.log(reps)
  }).catch(e=>{
    console.log(e)
  })
}


submit = submit.before(validator)

let data = {...form}
data.userName = ''
data.age = 1
submit({param: data})
