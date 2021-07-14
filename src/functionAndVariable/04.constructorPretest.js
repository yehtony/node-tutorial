function RegularCar(color) {
    this.color = color;
}

const redRegularCar = new RegularCar('red');
redRegularCar instanceof RegularCar; // => true
console.log("redRegularCar:", redRegularCar.color)


const ArrowCar = (color) => {
    this.color = color;
};

const redArrowCar = new arrowCar('red'); // TypeError: Car is not a constructor 