class Rope 
{
  constructor(body1, body2, pointA, pointB) 
  {
    this.pointA = pointA
    this.pointB = pointB    
    

    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB: {x: this.pointA, y: this.pointB},
        stiffness: 0.8
        
    } 
    this.rope = C.create(options)
    World.add(world, this.rope)

    
  }  
  show() {
    var pointA = this.rope.bodyA.position  
    var pointB = this.rope.bodyB.position
    strokeWeight(2)
    line (pointA.x, pointA.y, pointB.x + this.pointA, pointB.y + this.pointB)
  }
}