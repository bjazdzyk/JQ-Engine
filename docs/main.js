console.log("HW!")

let _W = window.innerWidth
let _H = window.innerHeight

const scene = new Scene("s", _W, _H)

const playerTexture = new Texture("assets/texture.png", 3, 1, [0, 1])
const player = new Sprite("p", 60, 60, playerTexture)
scene.addSprite(player)

player.setPos(100, 100)


player.setAnimation([[0, 0], [1, 0, {y:3}], [2, 0], [1, 0, {y:3}]], 10)


scene.onKeydown("D", ()=>{
	player.move(1.5, 0)
})
scene.onKeydown("A", ()=>{
	player.move(-1.5, 0)
})
scene.onKeydown("S", ()=>{
	player.move(0, 1.5)
})
scene.onKeydown("W", ()=>{
	player.move(0, -1.5)
})

const loop =()=>{
	requestAnimationFrame(loop)
	if(keys["KeyA"] || keys["KeyS"] || keys["KeyD"] || keys["KeyW"]){
		player.play()
	}else{
		player.stop()
	}
	player.update()
}
loop()