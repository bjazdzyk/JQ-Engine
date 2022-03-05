class Scene{
	constructor(width, height, bgColor){
		this.width = width
		this.height = height
		this.bgColor = bgColor
		let css = "width:" + JSON.parse(this.width) + "px;height:" + JSON.parse(this.height) + "px;background-color:"+ this.bgColor+";"
		$("body").append('<div class="scene" style=\''+ css +'\'></div>')
	}
}