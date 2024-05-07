type car = {
  Manufacture: string;
  Model: string;
  [key: string]: any;
};

function createCar(
  Manufacture: string,
  Model: string,
  optional: Record<string, any>
): car {
  return {
    Manufacture,
    Model,
    ...optional,
  };
}

const myCar: car = createCar("Toyota", "Carrola", {
  Color: "black",
  Year: "1997",
});

console.log(mycar);
