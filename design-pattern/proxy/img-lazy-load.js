let createImgObj = function () {
  let img = document.createElement('img')
  document.body.appendChild(img)
  return {
	setSrc: (src) => img.src = src
  }
}
let createImgProxy = function (image) {
  let img = new Image()
  img.onload = function () {
	image.setSrc(this.src)  //real load image
  }
  return {
	setSrc: (src) => {
	  image.setSrc('waiting img path')//waiting...
	  img.src = src
	}
  }
}
let image = createImgObj()
let proxy = createImgProxy(image)
proxy.setSrc("abc.com/img/path...")

