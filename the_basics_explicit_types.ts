function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// it should be new Date()
greet("Maddison", Date());
