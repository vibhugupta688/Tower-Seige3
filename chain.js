class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 1,
        }
        this.bodyA = bodyA;
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("red");
            strokeWeight(4.5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }

    attach(body) { 
        this.sling.bodyA = body;
    }
}

