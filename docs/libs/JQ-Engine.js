$("head").append(`<style>
.scene{
	position: fixed;
}

.sprite{
	position: relative;
	margin: 0px;
	image-rendering: pixelated;
}
</style>`)

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
	constructor(url, cols, rows, defaultCell = [0, 0]){
		this.url = url
		this.defaultCell = defaultCell
		this.cols = cols
		this.rows = rows
	}
}

class Sprite{
	constructor(id, width, height, texture){
		this.id = id
		this.width = width
		this.height = height
		this.texture = texture

		this.position = {x:0, y:0}

		this.animationTick = 0
		this.frameNum = 0
		this.currentAnimation = [texture.defaultCell]
		this.currentFrame = this.currentAnimation[this.animationTick]
		this.ticksBetweenFrames  = 100

		this.animationOffset = {x:0, y:0}
	}
	addToScene(scene){
		if(scene instanceof Scene){
			$(`#${scene.id}`).append(`<div id="${this.id}" class="sprite"></div>`)
			$(`#${this.id}`).css("width", `${this.width}px`)
			$(`#${this.id}`).css("height", `${this.height}px`)

			$(`#${this.id}`).css("background-image", `url(${this.texture.url})`)
			$(`#${this.id}`).css("background-size", `${this.width*this.texture.cols}px ${this.height*this.texture.rows}px`)
		}else{
			console.log("invalid argument")
		}

	}
	setPos(x, y){
		this.position.x = x
		this.position.y = y
	}
	move(x, y){
		this.position.x += x
		this.position.y += y
	}
	setAnimation(frames, frameDelay, frame = 0){
		this.currentAnimation = frames
		this.frameNum = frame
		this.ticksBetweenFrames = frameDelay
	}
	update(){

		$(`#${this.id}`).css("left", `${this.position.x + this.animationOffset.x}px`)
		$(`#${this.id}`).css("top", `${this.position.y + this.animationOffset.y}px`)

		this.animationTick ++
		if(this.animationTick > this.ticksBetweenFrames){
			this.animationTick = 0
			this.frameNum = (this.frameNum+1)%this.currentAnimation.length
			this.currentFrame = this.currentAnimation[this.frameNum]
		}
		const bgOffsetX = this.currentFrame[0]*this.width*-1
		const bgOffsetY = this.currentFrame[1]*this.height*-1
		if(this.currentFrame[2]){
			const offset = this.currentFrame[2]
			if(offset.x){
				this.animationOffset.x = offset.x
			}
			if(offset.y){
				this.animationOffset.y = offset.y
			}
		}else{
			this.animationOffset = {x:0, y:0}
		}

		$(`#${this.id}`).css("background-position", `${bgOffsetX}px ${bgOffsetY}px`)
	}

}