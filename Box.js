class Box{
    constructor(x,y,width,height){
        var op={
            restitution:0.1,
            friction:1,density:1
        } 
        this.body=Bodies.rectangle(x,y,width,height,op)
        this. width=width
        this.height=height
     World.add(world,this.body)
    }
    display(){
     rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}