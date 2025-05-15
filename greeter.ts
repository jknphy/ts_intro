function greeter(person: string) {
    return "Hello, " + person;
}
let user1 = "Jane User";
document.body.textContent = greeter(user1);

let user2 = [0, 1, 2];
document.body.textContent = greeter(user2);
