console.log("HW!")

let _W = window.innerWidth
let _H = window.innerHeight

const scene = new Scene("s", _W, _H)

const playerTexture = new Texture("assets/Boy.png", 16, 16)
const player = new Sprite("p", 64, 64, playerTexture)
scene.addSprite(player)
player.setPos(100, 100)

const loop =()=>{
	requestAnimationFrame(loop)
	player.move(2, 1)
}
loop()