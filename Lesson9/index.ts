// Numeric Enums
enum Directions {
  North,
  South,
  West,
  East,
}

let northDirection = Directions.North;
console.log(northDirection);

// You can set the value of the first numeric enum and have it auto increment from that:
enum Cars {
  Toyota = 1,
  Nissan,
  Honda,
  Suzuki,
  Kia,
}

console.log(Cars.Toyota);

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

// String Enums
enum CardinalDirections {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West',
}
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
