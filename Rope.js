class Rope{
  constructor(body1,body2,pointB) {
      var options = {
          bodyA:body1,
          bodyB:body2,
          pointB:pointB
      }
      this.pointB = pointB
      this.rope = Constraint.create(options)
      World.add(world,this.rope)

  } 
  display(){
      var pointB = this.pointB
      strokeWeight(2)
      stroke("yellow")
      line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+pointB.x,this.rope.bodyB.position.y+pointB.y)
  }
}