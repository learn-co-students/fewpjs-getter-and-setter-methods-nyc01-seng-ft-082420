// Add your Circle class here
class Circle {

    constructor(radius) {
        this.radius = radius
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }


    set diameter(newDiam) {
        this.radius = newDiam / 2
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    set circumference(newCir) {
        this.radius = newCir / 2 / Math.PI
    }

}