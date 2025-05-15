// The inferred return type is void
function noop() {
    return;
}

// The unknown type represents any value.
// This is similar to the any type, but is safer because
// it’s not legal to do anything with an unknown value
function safeParse(s: string): unknown {
    return JSON.parse(s);
}

// Some functions never return a value:
function fail(msg: string): never {
    throw new Error(msg);
}
