const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
    // ...
} else if (value === "b") {
    // Oops, unreachable
}
