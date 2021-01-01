class Bob{
  constructor(x,y){
      var options = {
      isStatic:false,
      restitution:1.2,
      density:1.5
      }
      this.body = Bodies.circle(x,y,20,options)
      World.add(world,this.body)
  }
     display(){
         ellipseMode(RADIUS)
         fill("cyan")
         ellipse(this.body.position.x,this.body.position.y,20,20)
     }
    
}