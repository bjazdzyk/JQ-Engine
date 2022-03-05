class Scene{
	constructor(id, width, height, bgColor="skyblue"){
		this.width = width
		this.height = height
		this.bgColor = bgColor
		this.id = id
		let css = "width:" + this.width + "px;height:" + this.height + "px;background-color:"+ this.bgColor+";"
		$("body").append(`<div id="${this.id}" class="scene" style=${css}></div>`)

	}
}

class Sprite{
	constructor(id, width, height){
		this.id = id
		this.width = width
		this.height = height
		let css = `width:${this.width}px;height:${this.height}px;`
		$("body").append(`<div id="${this.id}" class="sprite"></div>`)

		$(`#${this.id}`).css("width", `${this.width}px`)
		$(`#${this.id}`).css("height", `${this.height}px`)

		this.position = {x:0, y:0}
	}
	setPos(x, y){
		this.position.x = x
		this.position.y = y
		$(`#${this.id}`).css("left", `${this.position.x}px`)
		$(`#${this.id}`).css("top", `${this.position.y}px`)
	}

}