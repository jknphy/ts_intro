function fn(x: string): void;
function fn(): void;
function fn() {
}
fn();

// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//     return x.length;
// }

// Always prefer parameters with union types
// instead of overloads when possible
function len(x: any[] | string) {
    return x.length;
}

len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);
