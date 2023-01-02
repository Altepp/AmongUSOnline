class GameObject {

    constructor(p, t){
        this.property = p ,
        this.type = t,
        this.velocity = {x: 0, y:0},
        this.update = Update
        function Update() {
            ctx.fillStyle = this.property.color
            ctx.fillRect(this.property.posX, this.property.posY, this.property.width, this.property.height)


            requestAnimationFrame(this.Update)
        }
    }
}
