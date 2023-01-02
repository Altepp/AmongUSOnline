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
    image: null
}, "rect")

let elementList = [backGround, "iii"]

updateScreen()

function  updateScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let i = 0; i < elementList.length ; i++){

        let current = elementList[i] 

        console.log(current)
        if (current.type == "rect") {
            ctx.fillStyle = current.property.color
            ctx.fillRect(current.property.posX, current.property.posY, current.property.width, current.property.height)
        }

    }


    requestAnimationFrame(updateScreen)
}

