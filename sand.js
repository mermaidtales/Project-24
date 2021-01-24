class Sand {
    constructor(x, y, radius, height) {
      var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':4.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 25;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push ();
      ellipseMode(RADIUS);
      strokeWeight (2);
      stroke (0);
      fill(255, 255, 0);
      ellipse (pos.x, pos.y, 10, 10);
      pop();
    }
  };