class package{
    constructor(x,y,radius){
        var options={
            'restitution':0.1,
            'density':0.5,
            'friction':0.3
        }
        this.body=Bodies.rectangle(x,y,radius,options);
        this.radius=radius;
        
        World.add(world,this.body);
    }
    display(){
        
        rectMode(CENTER);
        rect(0,0,this.radius);
    }
}