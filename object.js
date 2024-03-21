const car = {
    name : "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    start: () => {
        return console.log(car.color + car.model);
    },
};

console.log(car.name);
car.start();