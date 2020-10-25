Function.prototype.after = function (afterFunc) {
  let self = this
  return function () {
	self.apply(this, arguments)
	afterFunc.apply(this, arguments)
  }
}

function login({name}) {
  console.log("%s login", name)
}

function log() {
  let {type} = [].slice.call(arguments).pop()
  console.log("exec %s operate when %s.", type, Date.now())
}

login = login.after(log)

login({name: 'tom', type: 'login'})

