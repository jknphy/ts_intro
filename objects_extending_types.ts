interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
// (1) interface extension
interface ColorfulCircle extends Colorful, Circle { }
// (2) interseciton types
// type ColorfulCircle = Colorful & Circle;
const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};


