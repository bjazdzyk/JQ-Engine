console.log("HW!")

let _W = window.innerWidth
let _H = window.innerHeight

const scene = new Scene("s", _W, _H)

const playerTexture = new Texture("assets/texture.png", 3, 1, [1, 0])
const player = new Sprite("p", 60, 60, playerTexture)
scene.addSprite(player)

player.setPos(100, 100)


player.setAnimation([[0, 0], [1, 0, {y:-4}], [2, 0], [1, 0, {y:-4}]], 8)


const speed = 2
scene.onKeydown("D", ()=>{
	player.move(speed, 0)
	player.flip({x:1})
})
scene.onKeydown("A", ()=>{
	player.move(-speed, 0)
	player.flip({x:-1})
})
scene.onKeydown("S", ()=>{
	player.move(0, speed)
})
scene.onKeydown("W", ()=>{
	player.move(0, -speed)
})

const loop =()=>{
	console.log(player.currentFrame)
	requestAnimationFrame(loop)
	if(keys["KeyA"] || keys["KeyS"] || keys["KeyD"] || keys["KeyW"]){
		player.play()
	}else{
		player.stop()
	}
	player.update()
}
loop()