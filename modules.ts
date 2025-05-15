// @filename: maths.ts
export const pi = 3.14;
export default class RandomNumberGenerator { }

// @filename: app.ts
import RandomNumberGenerator, { pi as π } from "./maths.js";
console.log(π);

// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
export interface Dog {
    breeds: string[];
    yearOfBirth: number;
}

// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";
export type Animals = Cat | Dog;
const name = createCatName();
