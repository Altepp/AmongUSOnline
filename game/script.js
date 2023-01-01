const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");

// Initialize canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Make the canvas change size depending on the current size 
// of body and update the canvas to adjust accordingly
window.onresize = function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

const backGround = new GameObject({
    width: window.innerWidth,
    height: window.innerHeight,
    posX:0,
    posY:0,
    color:"#000",
    visible: true,
}, "rect")

let elementList = [backGround]

updateScreen()

function updateScreen() {
    elementList = [backGround]

    elementList.forEach(element => {

        element.property.posX += element.velocity.x
        element.property.posY += element.velocity.y

        ctx.fillStyle = element.property.color
        ctx.fillRect(element.property.posX, element.property.posY, element.property.width, element.property.height)

        
    })

    requestAnimationFrame(updateScreen)
}

