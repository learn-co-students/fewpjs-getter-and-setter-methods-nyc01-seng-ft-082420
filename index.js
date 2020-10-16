// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    
    get diameter() {
        
        return this.radius * 2
    }

    get circumference() {
       
        return (2 * this.piValue) * this.radius   
    }

    get area() {
        
        return this.piValue * (this.radius * this.radius)
        
    }
    
    
    get piValue() {
        return Math.PI
    }

    // set diameter(radius) {
    //     this.radius = radius
        
    // }

    // set circumference(radius) {
    //     this.radius = radius
        
    // }


    // set area(radius) {
    //     this.radius = radius
        
    // }


    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / (this.piValue * 2)
    }

    set area(area) {
        this.radius = Math.sqrt(area / pi)
    }

    


}


