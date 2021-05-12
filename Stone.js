class Stone{
	constructor(x,y,r)
	{

	var options = {
		'density':2,
		'friction': 1.0,
		'restitution':0.4
	  }
		
		this.body=Bodies.rectangle(x, y,50,30, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;	
            var angle = this.body.angle;	
			push()
            translate(stone.pos.x, stone.pos.y)
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkgreen");
            rect(0,0,this.width,this.height)
            pop()
	}

}