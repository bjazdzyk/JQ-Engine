console.log("HW!")

let _W = window.innerWidth
let _H = window.innerHeight

const scene = new Scene("s", _W, _H)

const playerTexture = new Texture("assets/Boy.png", 16, 16)
const player = new Sprite("p", 100, 100, playerTexture)
player.setPos(100, 100)