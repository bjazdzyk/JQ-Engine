class Scene{
	constructor(id, width, height, bgColor="skyblue"){
		this.width = width
		this.height = height
		this.bgColor = bgColor
		this.id = id
		let css = "width:" + this.width + "px;height:" + this.height + "px;background-color:"+ this.bgColor+";"
		$("body").append(`<div id="${this.id}" class="scene" style=${css}></div>`)
	}
	addSprite(sprite){
		if(sprite instanceof Sprite){
			sprite.addToScene(this)
		}else{
			console.log("invalid argument")
		}
	}
}

class Texture{
	constructor(url, cellWidth, cellHeight){
		this.cellWidth = cellWidth
		this.cellHeight = cellHeight
		this.url = url
	}
}

class Sprite{
	constructor(id, width, height, texture){
		this.id = id
		this.width = width
		this.height = height
		this.texture = texture

		this.position = {x:0, y:0}
	}
	addToScene(scene){
		if(scene instanceof Scene){
			$(`#${scene.id}`).append(`<div id="${this.id}" class="sprite"></div>`)
			$(`#${this.id}`).css("width", `${this.width}px`)
			$(`#${this.id}`).css("height", `${this.height}px`)

			$(`#${this.id}`).css("background-image", `url(${this.texture.url})`)
			$(`#${this.id}`).css("background-size", `${this.width}px ${this.height}px`)
		}else{
			console.log("invalid argument")
		}

	}
	setPos(x, y){
		this.position.x = x
		this.position.y = y
		$(`#${this.id}`).css("left", `${this.position.x}px`)
		$(`#${this.id}`).css("top", `${this.position.y}px`)
	}
	move(x, y){
		this.position.x += x
		this.position.y += y
		$(`#${this.id}`).css("left", `${this.position.x}px`)
		$(`#${this.id}`).css("top", `${this.position.y}px`)
		console.log(this.position)
	}

}