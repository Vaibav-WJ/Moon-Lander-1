class Meteor{
    constructor(x,y,width,height,metPos,metImg){
        this.speed = 0.05;
        this.body = bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.metPos = mp;

        this.metImg = loadImage("assets/meteor(2)/png");

        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.pos;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.metPos,this.width,this.height)
        pop();
    }
}